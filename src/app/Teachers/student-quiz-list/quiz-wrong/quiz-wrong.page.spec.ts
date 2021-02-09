import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizWrongPage } from './quiz-wrong.page';

describe('QuizWrongPage', () => {
  let component: QuizWrongPage;
  let fixture: ComponentFixture<QuizWrongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizWrongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizWrongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
