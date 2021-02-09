import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidFreeProfilePage } from './kid-free-profile.page';

describe('KidFreeProfilePage', () => {
  let component: KidFreeProfilePage;
  let fixture: ComponentFixture<KidFreeProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidFreeProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidFreeProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
