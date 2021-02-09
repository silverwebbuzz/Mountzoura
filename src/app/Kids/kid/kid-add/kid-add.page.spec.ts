import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidAddPage } from './kid-add.page';

describe('KidAddPage', () => {
  let component: KidAddPage;
  let fixture: ComponentFixture<KidAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
