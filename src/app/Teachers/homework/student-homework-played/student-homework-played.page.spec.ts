import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentHomeworkPlayedPage } from './student-homework-played.page';

describe('StudentHomeworkPlayedPage', () => {
  let component: StudentHomeworkPlayedPage;
  let fixture: ComponentFixture<StudentHomeworkPlayedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentHomeworkPlayedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentHomeworkPlayedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
