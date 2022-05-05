import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphtileComponent } from './graphtile.component';

describe('GraphtileComponent', () => {
  let component: GraphtileComponent;
  let fixture: ComponentFixture<GraphtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphtileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
