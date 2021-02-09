import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidPremiumProfilePage } from './kid-premium-profile.page';

describe('KidPremiumProfilePage', () => {
  let component: KidPremiumProfilePage;
  let fixture: ComponentFixture<KidPremiumProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidPremiumProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidPremiumProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
