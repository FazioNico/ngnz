import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCopyComponent } from './page-copy.component';

describe('PageCopyComponent', () => {
  let component: PageCopyComponent;
  let fixture: ComponentFixture<PageCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
