import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VennilaComponent } from './vennila.component';

describe('VennilaComponent', () => {
  let component: VennilaComponent;
  let fixture: ComponentFixture<VennilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VennilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VennilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
