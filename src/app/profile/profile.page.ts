import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap, map } from 'rxjs'
import { User } from '../interfaces/user';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class profilePage {

  updateUserForm: FormGroup = this.formBuilder.group({
    name: [ '', [Validators.required, Validators.minLength( 3 ),] ],
    lastName: [ '', [Validators.required, Validators.minLength( 3 ),] ],
    username: [ '',[ Validators.required, Validators.email]],
    phone: [ '',[ Validators.required]] // ver si se puede hacer un regex para validar este fieled
  });
  userId!: string

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) {}

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

        this.userService.getUserById(id).subscribe((data: User) => {
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
  }

}
