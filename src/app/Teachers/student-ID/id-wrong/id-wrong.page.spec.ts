import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdWrongPage } from './id-wrong.page';

describe('IdWrongPage', () => {
  let component: IdWrongPage;
  let fixture: ComponentFixture<IdWrongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdWrongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdWrongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
