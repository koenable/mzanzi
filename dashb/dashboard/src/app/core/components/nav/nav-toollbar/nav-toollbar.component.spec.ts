import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToollbarComponent } from './nav-toollbar.component';

describe('NavToollbarComponent', () => {
  let component: NavToollbarComponent;
  let fixture: ComponentFixture<NavToollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavToollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavToollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
