import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotWrongPage } from './forgot-wrong.page';

describe('ForgotWrongPage', () => {
  let component: ForgotWrongPage;
  let fixture: ComponentFixture<ForgotWrongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotWrongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotWrongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
