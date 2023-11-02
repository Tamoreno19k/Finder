import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { profilePage } from './profile.page';

describe('Tab1Page', () => {
  let component: profilePage;
  let fixture: ComponentFixture<profilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [profilePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(profilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
