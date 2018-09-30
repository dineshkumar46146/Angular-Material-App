
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SmartNavComponent } from './smart-nav.component';

describe('SmartNavComponent', () => {
  let component: SmartNavComponent;
  let fixture: ComponentFixture<SmartNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SmartNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
