import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestsChildPage } from './requests-child.page';

describe('RequestsChildPage', () => {
  let component: RequestsChildPage;
  let fixture: ComponentFixture<RequestsChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsChildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestsChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
