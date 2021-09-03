import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreContactsComponent } from './more-contacts.component';

describe('MoreContactsComponent', () => {
  let component: MoreContactsComponent;
  let fixture: ComponentFixture<MoreContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
