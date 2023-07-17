import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineComponentComponent } from './cine-component.component';

describe('CineComponentComponent', () => {
  let component: CineComponentComponent;
  let fixture: ComponentFixture<CineComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CineComponentComponent]
    });
    fixture = TestBed.createComponent(CineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
