import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit {
  
  products!: Product[]
  productsForm: FormGroup

  constructor(
    private productServices: ProductsService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private validateForm: ValidateFormsService,
    private http: HttpClient
  ) { 
    this.productsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, this.validateForm.validatePrice ]],
      quantity: ['', [Validators.required, this.validateForm.validateQuantity ]],
      urlImage: ['', [Validators.required, this.validateForm.validateNormalUrl ]],
      description: ['', [Validators.required, this.validateForm.validateDescription ]],
      category: ['']
    })
  }

async presentAlert() {
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
        placeholder: 'direccion imagen'
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

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts() {
    this.productServices.getAllProducts().subscribe(data => {
      console.log(data.allProducts)
      this.products = data.allProducts
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
    })
    this.loadProducts()
  }
}
