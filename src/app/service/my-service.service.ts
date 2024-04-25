import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  getServiceObjs(): Observable<any>{
    

    return of({ id: 1, name: 'Sample Data' });
  }


  getServiceObj(param: string | null): Observable<any>{
    console.log('param is : ' + param)
    return of({id: 1, name: 'sample data 2'})
  }

}
