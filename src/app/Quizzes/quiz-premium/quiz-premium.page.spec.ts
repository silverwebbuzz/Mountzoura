import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizPremiumPage } from './quiz-premium.page';

describe('QuizPremiumPage', () => {
  let component: QuizPremiumPage;
  let fixture: ComponentFixture<QuizPremiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPremiumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
