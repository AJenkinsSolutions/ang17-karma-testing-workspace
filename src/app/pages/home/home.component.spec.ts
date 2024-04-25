import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

interface LocalStorageMock {
  [key: string]: string;
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: LocalStorageMock = {};

  //Test bed set up
  beforeEach(async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [ HomeComponent ]
    })
    .compileComponents();
  });
   
  beforeEach(() => {

    // Mocking localStorage
    spyOn(localStorage, 'getItem').and.callFake((key:string): string => {
      return store[key] || ''; 
    });
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string => {
      return store[key] = value;
    });

    // Set mock data in localStorage
    store['startDate'] = new Date(2021, 0).toISOString(); // January 2021
    store['endDate'] = new Date(2021, 5).toISOString(); // June 2021


    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();                 // Update view with new headers
  });
    



  // Clear mock data after each test
  afterEach(() => {
    store = {}; 
    //Reset Test
    TestBed.resetTestingModule();
  });
  
  // Assertion: not null 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Assertion: 
  it('should display the correct range of headers for given dates', () => {
  // console.log('debug'+ component.headers);  Log the headers to debug
  // getting the header element 
  const tableHeaders = fixture.nativeElement.querySelectorAll('th.test');
  const expectedHeaders = [
    'January 2021', 'February 2021', 'March 2021', 
    'April 2021', 'May 2021', 'June 2021'
  ];

  
  
  expectedHeaders.forEach((header, index) => {
    console.log(header); // Also log what's actually in the DOM
    expect(tableHeaders[index].textContent).toContain(header)
  })

  });


// it('should have the correct number of headers', () => {
//   const tableHeaders = fixture.nativeElement.querySelectorAll('th.test');
//   const expectedHeaders = [
//     'January 2021', 'February 2021', 'March 2021', 
//     'April 2021', 'May 2021', 'June 2021'
//   ];

//   const expectedHeadersCount: number = expectedHeaders.length;

//   expect(tableHeaders.length).toBe(expectedHeadersCount);
    
// })

//Component Test


it('length should equal 5', () => {

  const expectedLen = 6; 
  const actualLen = component.headers.length
  expect(actualLen).toBe(expectedLen);

})
  

});
