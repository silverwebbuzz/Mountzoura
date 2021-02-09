import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoSearchPage } from './video-search.page';

describe('VideoSearchPage', () => {
  let component: VideoSearchPage;
  let fixture: ComponentFixture<VideoSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
