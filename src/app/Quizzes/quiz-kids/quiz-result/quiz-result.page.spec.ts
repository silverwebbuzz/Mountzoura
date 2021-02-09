import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizResultPage } from './quiz-result.page';

describe('QuizResultPage', () => {
  let component: QuizResultPage;
  let fixture: ComponentFixture<QuizResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
