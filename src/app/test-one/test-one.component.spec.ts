import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOneComponent } from './test-one.component';
import { of } from 'rxjs';
import { MyServiceService } from '../service/my-service.service';


interface LocalStorageMock {
  [key: string]: string;
}

describe('TestOneComponent', () => {
  let component: TestOneComponent;
  let fixture: ComponentFixture<TestOneComponent>;
  let myServiceMock;
  let store: LocalStorageMock = {};

  beforeEach(async () => {

    //Mock the Myservice
    myServiceMock = jasmine.createSpyObj('MyServiceService', ['getServiceObjs', 'getServiceObj']);

    // 1Return an observable from the spy
    myServiceMock.getServiceObjs.and.returnValue(of({ data: 'data'}))
    myServiceMock.getServiceObj.and.returnValue(of({response: { myDataList: ['obj1', 'obj2']}}))


    await TestBed.configureTestingModule({
      imports: [TestOneComponent],
      declarations: [],
      providers: [
        { provide: MyServiceService, useValue: myServiceMock}
      ]
    })
    .compileComponents();


    // Mocking localStorage
    spyOn(localStorage, 'getItem').and.callFake((key:string): string => {
      return store[key] || ''; 
    });

    // Set mock data in localStorage
    store['Id'] = 'localStoreId' // January 2021
    
    fixture = TestBed.createComponent(TestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call innerMethod when OutterMethod is called', async () => {

  component.myCapExp.nonLaborSpendClassList = [{data: 'obj1'}] 
  spyOn(component, 'innerMethod');
  spyOn(component, 'innerMethod2');

  component.outterMethod();

  await fixture.whenStable();

  expect(component.innerMethod).toHaveBeenCalled();
  expect(component.innerMethod2).toHaveBeenCalled();
});

});
