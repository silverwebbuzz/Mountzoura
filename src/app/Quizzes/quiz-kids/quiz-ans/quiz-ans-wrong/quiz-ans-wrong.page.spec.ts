import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizAnsWrongPage } from './quiz-ans-wrong.page';

describe('QuizAnsWrongPage', () => {
  let component: QuizAnsWrongPage;
  let fixture: ComponentFixture<QuizAnsWrongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAnsWrongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizAnsWrongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
