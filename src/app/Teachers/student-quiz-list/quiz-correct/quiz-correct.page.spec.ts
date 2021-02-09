import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizCorrectPage } from './quiz-correct.page';

describe('QuizCorrectPage', () => {
  let component: QuizCorrectPage;
  let fixture: ComponentFixture<QuizCorrectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCorrectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizCorrectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
