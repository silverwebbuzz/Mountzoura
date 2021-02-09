import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherPremiumPage } from './teacher-premium.page';

describe('TeacherPremiumPage', () => {
  let component: TeacherPremiumPage;
  let fixture: ComponentFixture<TeacherPremiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPremiumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherPremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
