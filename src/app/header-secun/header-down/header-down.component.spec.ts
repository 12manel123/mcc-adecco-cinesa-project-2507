import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDownComponent } from './header-down.component';

describe('HeaderDownComponent', () => {
  let component: HeaderDownComponent;
  let fixture: ComponentFixture<HeaderDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
