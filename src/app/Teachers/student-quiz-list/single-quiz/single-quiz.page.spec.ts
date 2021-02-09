import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleQuizPage } from './single-quiz.page';

describe('SingleQuizPage', () => {
  let component: SingleQuizPage;
  let fixture: ComponentFixture<SingleQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleQuizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
