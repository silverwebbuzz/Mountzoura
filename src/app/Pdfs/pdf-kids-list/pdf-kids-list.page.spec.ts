import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfKidsListPage } from './pdf-kids-list.page';

describe('PdfKidsListPage', () => {
  let component: PdfKidsListPage;
  let fixture: ComponentFixture<PdfKidsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfKidsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfKidsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
