import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidAddedPage } from './kid-added.page';

describe('KidAddedPage', () => {
  let component: KidAddedPage;
  let fixture: ComponentFixture<KidAddedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidAddedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidAddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
