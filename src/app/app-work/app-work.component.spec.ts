
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWorkComponent } from './app-work.component';

describe('AppWorkComponent', () => {
  let component: AppWorkComponent;
  let fixture: ComponentFixture<AppWorkComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
