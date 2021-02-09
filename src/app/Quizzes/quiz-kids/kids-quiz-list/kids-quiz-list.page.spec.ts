import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidsQuizListPage } from './kids-quiz-list.page';

describe('KidsQuizListPage', () => {
  let component: KidsQuizListPage;
  let fixture: ComponentFixture<KidsQuizListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsQuizListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidsQuizListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
