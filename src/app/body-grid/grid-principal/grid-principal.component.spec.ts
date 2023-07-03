import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPrincipalComponent } from './grid-principal.component';

describe('GridPrincipalComponent', () => {
  let component: GridPrincipalComponent;
  let fixture: ComponentFixture<GridPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
