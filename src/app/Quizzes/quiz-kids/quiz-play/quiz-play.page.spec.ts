import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizPlayPage } from './quiz-play.page';

describe('QuizPlayPage', () => {
  let component: QuizPlayPage;
  let fixture: ComponentFixture<QuizPlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPlayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
