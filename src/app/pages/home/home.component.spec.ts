import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the correct table headers', () => {
    const tableHeaders = fixture.nativeElement.querySelectorAll('th');
    expect(tableHeaders[0].textContent).toContain('jan');
    expect(tableHeaders[1].textContent).toContain('feb');
    expect(tableHeaders[2].textContent).toContain('mar');
  })
});
