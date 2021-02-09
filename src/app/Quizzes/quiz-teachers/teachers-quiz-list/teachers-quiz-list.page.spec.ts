import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeachersQuizListPage } from './teachers-quiz-list.page';

describe('TeachersQuizListPage', () => {
  let component: TeachersQuizListPage;
  let fixture: ComponentFixture<TeachersQuizListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersQuizListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeachersQuizListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
