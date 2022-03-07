import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallstreetComponent } from './wallstreet.component';

describe('WallstreetComponent', () => {
  let component: WallstreetComponent;
  let fixture: ComponentFixture<WallstreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallstreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallstreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
