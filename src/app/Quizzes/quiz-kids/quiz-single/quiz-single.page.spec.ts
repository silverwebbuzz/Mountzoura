import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizSinglePage } from './quiz-single.page';

describe('QuizSinglePage', () => {
  let component: QuizSinglePage;
  let fixture: ComponentFixture<QuizSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
