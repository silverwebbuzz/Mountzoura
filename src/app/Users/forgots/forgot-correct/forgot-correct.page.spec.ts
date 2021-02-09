import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotCorrectPage } from './forgot-correct.page';

describe('ForgotCorrectPage', () => {
  let component: ForgotCorrectPage;
  let fixture: ComponentFixture<ForgotCorrectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotCorrectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotCorrectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
