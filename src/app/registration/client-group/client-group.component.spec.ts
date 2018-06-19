import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGroupComponent } from './client-group.component';

describe('ClientGroupComponent', () => {
  let component: ClientGroupComponent;
  let fixture: ComponentFixture<ClientGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
