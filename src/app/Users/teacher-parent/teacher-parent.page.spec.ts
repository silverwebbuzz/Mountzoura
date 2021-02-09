import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherParentPage } from './teacher-parent.page';

describe('TeacherParentPage', () => {
  let component: TeacherParentPage;
  let fixture: ComponentFixture<TeacherParentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherParentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
