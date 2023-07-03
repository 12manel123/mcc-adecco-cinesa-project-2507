import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLinkComponent } from './main-link.component';

describe('MainLinkComponent', () => {
  let component: MainLinkComponent;
  let fixture: ComponentFixture<MainLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
