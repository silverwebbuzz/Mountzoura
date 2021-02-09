import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTeacherPage } from './home-teacher.page';

describe('HomeTeacherPage', () => {
  let component: HomeTeacherPage;
  let fixture: ComponentFixture<HomeTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
