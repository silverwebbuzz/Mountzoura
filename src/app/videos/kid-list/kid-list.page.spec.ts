import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidListPage } from './kid-list.page';

describe('KidListPage', () => {
  let component: KidListPage;
  let fixture: ComponentFixture<KidListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
