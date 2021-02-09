import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidNewPage } from './kid-new.page';

describe('KidNewPage', () => {
  let component: KidNewPage;
  let fixture: ComponentFixture<KidNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
