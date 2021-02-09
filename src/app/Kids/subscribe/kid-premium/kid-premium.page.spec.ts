import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidPremiumPage } from './kid-premium.page';

describe('KidPremiumPage', () => {
  let component: KidPremiumPage;
  let fixture: ComponentFixture<KidPremiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidPremiumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidPremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
