import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidFreePage } from './kid-free.page';

describe('KidFreePage', () => {
  let component: KidFreePage;
  let fixture: ComponentFixture<KidFreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidFreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidFreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
