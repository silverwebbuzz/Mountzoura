import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeKidPage } from './home-kid.page';

describe('HomeKidPage', () => {
  let component: HomeKidPage;
  let fixture: ComponentFixture<HomeKidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeKidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
