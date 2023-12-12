import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class profilePage {
  updateUserForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]]
  });

  userId!: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private authservice: AuthService
  ) {}

<<<<<<< HEAD
  get user() {
    return this.authservice.user;
=======
  ngOnInit() {
    this.activateRoute.params
      .pipe(
        tap(response => {
          console.log(response)
          return response
        }),
        map(response => response['id'])
      ).subscribe(id => {
        console.log(id)

        this.userId = id

        this.userService.getUserById(id).subscribe((data: User): void => {
          console.log(data)

          const {name, lastName, username, phone, email} = data;

          this.updateUserForm.setValue({
            name,
            lastName,
            username,
            phone,
            email
          })
        })
      })
>>>>>>> 747c007fe7903db6994fba71536d2c1d8fa3ac60
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.userId = this.user._id;

    console.log('ngOnInit');
    

    this.userService.getUserById(this.userId).subscribe( data => {
      console.log( 'Data', data );

      if (data) {
        const {  name, lastName, username, phone } = data;
        console.log( name );
        
        this.updateUserForm.patchValue({
          name,
          lastName,
          username,
          phone
        });

        console.log('Form values:', this.updateUserForm.value);
      } else {
        console.error('User data is undefined or null.');
      }

    })

   }

   onSubmit() {
    console.log( this.updateUserForm.value );
    
   }
}
