import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdCorrectPage } from './id-correct.page';

describe('IdCorrectPage', () => {
  let component: IdCorrectPage;
  let fixture: ComponentFixture<IdCorrectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCorrectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdCorrectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
