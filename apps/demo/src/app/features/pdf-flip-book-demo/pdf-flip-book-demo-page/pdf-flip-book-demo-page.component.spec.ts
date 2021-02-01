import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFlipBookDemoPageComponent } from './pdf-flip-book-demo-page.component';

describe('PdfFlipBookDemoPageComponent', () => {
  let component: PdfFlipBookDemoPageComponent;
  let fixture: ComponentFixture<PdfFlipBookDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfFlipBookDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFlipBookDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
