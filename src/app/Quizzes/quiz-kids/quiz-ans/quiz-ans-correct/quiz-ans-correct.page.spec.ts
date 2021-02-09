import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizAnsCorrectPage } from './quiz-ans-correct.page';

describe('QuizAnsCorrectPage', () => {
  let component: QuizAnsCorrectPage;
  let fixture: ComponentFixture<QuizAnsCorrectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAnsCorrectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizAnsCorrectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
