import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizSearchPage } from './quiz-search.page';

describe('QuizSearchPage', () => {
  let component: QuizSearchPage;
  let fixture: ComponentFixture<QuizSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
