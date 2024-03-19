import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDataComponent } from './access-data.component';

describe('AccessDataComponent', () => {
  let component: AccessDataComponent;
  let fixture: ComponentFixture<AccessDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
