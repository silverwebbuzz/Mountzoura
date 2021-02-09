import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GdprPolicyPage } from './gdpr-policy.page';

describe('GdprPolicyPage', () => {
  let component: GdprPolicyPage;
  let fixture: ComponentFixture<GdprPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdprPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GdprPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
