import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXItemComponent } from './space-x-item.component';

describe('SpaceXItemComponent', () => {
  let component: SpaceXItemComponent;
  let fixture: ComponentFixture<SpaceXItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceXItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
