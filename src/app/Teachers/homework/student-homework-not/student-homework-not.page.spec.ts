import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentHomeworkNotPage } from './student-homework-not.page';

describe('StudentHomeworkNotPage', () => {
  let component: StudentHomeworkNotPage;
  let fixture: ComponentFixture<StudentHomeworkNotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentHomeworkNotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentHomeworkNotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
