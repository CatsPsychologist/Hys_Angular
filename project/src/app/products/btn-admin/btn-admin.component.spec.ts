import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAdminComponent } from './btn-admin.component';

describe('BtnAdminComponent', () => {
  let component: BtnAdminComponent;
  let fixture: ComponentFixture<BtnAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
