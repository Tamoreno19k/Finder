import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';
import { map, tap } from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit {
  
  products!: Product[]
  productId!: string

  public alertButtons = ['OK'];
  public alertForm!: FormGroup;
  private alertInputValues = {}; 

  constructor(
    private productServices: ProductsService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private validateForm: ValidateFormsService,
    private activeRoute: ActivatedRoute
  ) { }

  
  ngOnInit() {
    this.loadProducts()
    this.alertForm = this.fb.group({
        name: [''],
        description: [''],
        price: [''],
        quantity: [''],
        category: [''],
        urlImage: ['']
      });
  }

async alertFormCreate() {
  const alert = await this.alertController.create({
    header: 'Crea un nuevo producto',
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Nombre',
      },
      {
        name: 'description',
        type: 'textarea',
        placeholder: 'Descripcion',
      },
      {
        name: 'price',
        type: 'number',
        placeholder: 'Precio',
      },
      {
        name: 'quantity',
        type: 'number',
        placeholder: 'Cantidad',
      },
      {
        name: 'category',
        placeholder: 'Categoria',
      },
      {
        name: 'urlImage',
        type: 'text',
        placeholder: 'direccion imagen',
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('cancelado')
        }
      },
      {
        text: 'Crear',
        handler: (data) => {
          this.createProduct(data)
        }
      }
    ]
  })
  await alert.present()
}

getProductId() {
  this.activeRoute.params
    .pipe(
      tap(response => {
        console.log(response)
        return response
      }),
      map(response => response['id'])
    ).subscribe(id => {
      console.log(id)

      this.productId = id

      this.productServices.getProductById(id).subscribe(( data: Product ) => {
        console.log(data)

        const { name, description, price, quantity, urlImage, category } = data;

        this.alertForm.setValue({
            name,
            description,
            price,
            quantity,
            urlImage,
            category
        })
      })
    })
}

async alertFormUpdate() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            // Maneja la acción cuando se hace clic en OK y accede a los valores del formulario
            this.handleFormData(data);
          },
        },
      ],
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nuevo nombre',
          value: this.alertForm.get('name')?.value,
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'Nueva descripcion',
          value: this.alertForm.get('description')?.value,
        },
        {
          name: 'price',
          type: 'number',
          placeholder: 'Nuevo precio',
          value: this.alertForm.get('price')?.value,
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Nueva cantidad',
          value: this.alertForm.get('quantity')?.value,
        },
        {
            name: 'category',
            type: 'text',
            placeholder: 'Nueva categoria',
            value: this.alertForm.get('category')?.value,
        },
        {
            name: 'urlImage',
            type: 'text',
            placeholder: 'Nueva direccion imagen',
            value: this.alertForm.get('urlImage')?.value,
        },
      ],
    });

    await alert.present();
  }

  updateFormValues(data:any) {
    this.alertForm.setValue({
      name: data.name,
      nickname: data.nickname,
      age: data.age,
      about: data.about,
    });
  }

  loadProducts() {
    this.productServices.getAllProducts().subscribe(data => {
      console.log(data.allProducts)
      this.products = data.allProducts
    })
  }

  handleFormData(data:any) {
    // Actualiza el formulario con los valores del cuadro de diálogo
    this.updateFormValues(data);

    const formData = this.alertForm.value;
    console.log('Form Data:', formData);

    // Realiza validación y otras acciones con los datos del formulario
    // Puedes acceder a campos individuales, por ejemplo, formData.name, formData.nickname, etc.
  }

  createProduct(data: Product) {
    this.productServices.createProduct(data)
    .subscribe((response) => {
      console.log(response)
      window.location.reload()
    })
  }

  async deleteProductConfirm (id: any) {
    const alert = await this.alertController.create({
      header: 'Confimar Eliminacion',
      message: `¿Estas seguro de deseas eliminar el producto?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('eliminacion cancelada')
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteProduct(id)
          }
        }
      ]
    })

    await alert.present()
  }

  deleteProduct(id: string) {
    this.productServices.deleteProductById(id).subscribe(() => {
      this.loadProducts()
    })
  }

  updateProduct() {
    //console.log(this.productsForm)
    this.productServices.updateProduct(this.productId, this.alertForm.value)
        .subscribe(data => {
            console.log(data)
            this.alertForm.reset()
        })
  }
}
