import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDayjsComponent } from './page-dayjs.component';

describe('PageDayjsComponent', () => {
  let component: PageDayjsComponent;
  let fixture: ComponentFixture<PageDayjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDayjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDayjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
