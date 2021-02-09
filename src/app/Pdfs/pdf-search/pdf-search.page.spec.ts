import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfSearchPage } from './pdf-search.page';

describe('PdfSearchPage', () => {
  let component: PdfSearchPage;
  let fixture: ComponentFixture<PdfSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
