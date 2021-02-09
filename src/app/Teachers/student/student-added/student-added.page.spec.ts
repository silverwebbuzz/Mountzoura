import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentAddedPage } from './student-added.page';

describe('StudentAddedPage', () => {
  let component: StudentAddedPage;
  let fixture: ComponentFixture<StudentAddedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAddedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
