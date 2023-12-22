import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, Inject } from '@angular/core';
import { GooglemapsService } from './googlemaps.service';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { CartService } from 'src/app/services/cart.service';
import { Cart, CartItem } from 'src/app/interfaces/cart';
import { IonContent } from '@ionic/angular';

declare var google: any;


@Component({
  selector: 'google-maps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss']
})
export class GooglemapsComponent implements OnInit {
      
      @ViewChild(IonContent) content!: IonContent;

      cart: Cart = {
            items: [
              { id: '565512', urlImage: 'https://placehold.co/150x200', name: 'snikers', price: 150, quantity: 1 },
              { id: '1859', urlImage: 'https://placehold.co/150x200', name: 'puma', price: 175, quantity: 3 },
            ]
          }
      
      cartData!: CartItem[]

      // coordenadas deafult
      @Input() position = {  
            lat: 4.644736,
            lng: -74.063888
      };

      label = {
            titulo:'Ubicación',
            subtitulo: 'Tú estás aquí'
      } 

      map: any;
      marker: any;
      infowindow: any;
      positionSet: any

      @ViewChild('map') divMap!: ElementRef;


      constructor(private renderer: Renderer2,
                @Inject(DOCUMENT) private document: Document,
                  private googlemapsService: GooglemapsService,
                  public modalController: ModalController,
                  private cartService: CartService
                  ) { }

      ngOnInit(): void {
            this.init();
            console.log('position ->', this.position)

            this.cartService.cart.subscribe((cart: Cart) => {
                  this.cart = cart
                  this.cartData = this.cart.items
                })
                console.log(this.cartService.cart.value)
      }

      async init() {

            this.googlemapsService.init(this.renderer, this.document).then( () => {
                  this.initMap();
            }).catch( (err) => {    
                  console.log(err);
            });
            
      }

      initMap() {

            const position = this.position;

            let latLng = new google.maps.LatLng(position.lat, position.lng);

            let mapOptions = {
                  center: latLng,
                  zoom: 15,
                  disableDefaultUI: false,
                  clickableIcons: true,
                  streetViewControl: false,
                  zoomControl: false,
                  mapTypeControl: false
            };

            this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
            this.marker = new google.maps.Marker({
                  map: this.map,
                  animation: google.maps.Animation.DROP,
                  draggable: false,
            });
            this.clickHandleEvent();
            this.infowindow = new google.maps.InfoWindow();
            this.addMarker(position);
            this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);

      }

      clickHandleEvent() {

            this.map.addListener('click', (event: any) => {
                  const position = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                  };
                  this.addMarker(position);
            });

      }

      addMarker(position: any): void {

            let latLng = new google.maps.LatLng(position.lat, position.lng);

            this.marker.setPosition(latLng);
            this.map.panTo(position);
            this.positionSet = position;

      }

      setInfoWindow(marker: any, titulo: string, subtitulo: string) {

            const contentString  =  '<div id="contentInsideMap">' +
                                    '<div>' +
                                    '</div>' +
                                    '<p style="font-weight: bold; margin-bottom: 5px;">' + titulo + '</p>' +
                                    '<div id="bodyContent">' +
                                    '<p class"normal m-0">'
                                    + subtitulo + '</p>' +
                                    '</div>' +
                                    '</div>';
            this.infowindow.setContent(contentString);
            this.infowindow.open(this.map, marker);

      }

      async mylocation() {

      console.log('mylocation() click')

      Geolocation.getCurrentPosition().then((res:any) => {

            console.log('mylocation() -> get ', res);

            const position = {
                  lat: res.coords.latitude,
                  lng: res.coords.longitude,
            }
            this.addMarker(position);

      });

      }

      aceptar() {
            console.log('click aceptar -> ', this.positionSet);
            // this.modalController.dismiss({pos: this.positionSet})
      }

      scrollToBottom() {
            // Passing a duration to the method makes it so the scroll slowly
            // goes to the bottom instead of instantly
            this.content.scrollToBottom(500);
          }

}