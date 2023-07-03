import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSecundarioComponent } from './grid-secundario.component';

describe('GridSecundarioComponent', () => {
  let component: GridSecundarioComponent;
  let fixture: ComponentFixture<GridSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSecundarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
