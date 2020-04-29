import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLightboxComponent } from './photo-lightbox.component';

describe('PhotoLightboxComponent', () => {
  let component: PhotoLightboxComponent;
  let fixture: ComponentFixture<PhotoLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
