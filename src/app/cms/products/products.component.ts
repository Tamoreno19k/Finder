import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit {

  selectedId!: string
  products!: Product[]
  productId!: string
  id!: string | null;
  productsUpdate!: Product[]
  storeId!: string | null

  public alertButtons = ['OK'];
  public alertForm!: FormGroup;

  constructor(
    private productServices: ProductsService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService
  ) { 
  }

  
  ngOnInit() {
    this.loadProducts()
    console.log(this.storeId)

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

async alertFormUpdate(id: string) {
  this.selectedId = id
    const alert = await this.alertController.create({
      header: 'Actualiza tu producto',
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
            this.updateProduct(data, this.selectedId);
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

loadData(id: string) {
  this.productServices.getProductById(id).subscribe((data: Product) => {
  const { name, description, price, quantity, urlImage, category } = data;

   this.alertForm.patchValue({
     name,
     description,
     price,
     quantity,
     urlImage,
     category
  });

  this.alertFormUpdate(id)
 });
}

updateFormValues(data:any) {
  this.alertForm.setValue({
    name: data.name,
    description: data.description,
    price: data.price,
    quantity: data.quantity,
    category: data.category,
    urlImage: data.urlImage
  });
}

  loadProducts() {
    this.storeId = this.authService.getStoreId()
    this.productServices.getAllProducts().subscribe((data) => {
      const storeProducts = data.allProducts.filter((productos: Product) => {
        return productos.storeId === this.storeId
      })
      console.log(storeProducts)
      this.products = storeProducts
    })
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

updateProduct(data: any, id: string) {
  this.updateFormValues(data)
     this.productServices.updateProduct(id, this.alertForm.value )
        .subscribe(data => {
            console.log(data)
            this.alertForm.reset()
            this.loadProducts()
        })
  }
}

function producto(value: Product, index: number, array: Product[]): value is Product {
  throw new Error('Function not implemented.');
}
