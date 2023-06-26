import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNewComponent } from './last-new.component';

describe('LastNewComponent', () => {
  let component: LastNewComponent;
  let fixture: ComponentFixture<LastNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
