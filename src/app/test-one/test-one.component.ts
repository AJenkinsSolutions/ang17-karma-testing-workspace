import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';


@Component({
  selector: 'app-test-one',
  standalone: true,
  imports: [],
  templateUrl: './test-one.component.html',
  styleUrl: './test-one.component.scss'
})
export class TestOneComponent implements OnInit{
  
  service; 

  myDataListObj = []
  myCapExp: any = {};
  categories = [];

  ngOnInit(): void {
    this.outterMethod()

  }



  constructor(service: MyServiceService){
    this.service = service; 
  }

  

  outterMethod(){
    this.service.getServiceObjs().subscribe((data) => {
      this.innerMethod2();
      this.innerMethod();
      this.myData = data;
      this.categories = this.myData.nonLaborSpendClassList;
      
    })
  }

  innerMethod(){
    console.log('innerMethod')
    
  }

  innerMethod2(){
    console.log('innert method 2')
    let id: string | null = localStorage.getItem('Id');
    
    this.service.getServiceObj(id).subscribe((data: any) => {
      // console.log('inside inner method 2')
      this.myDataListObj = data.response.myDataList;
      this.populateAssetType("1", 1)
    })
  }

  populateAssetType(param1: string, index: number){
    if (!this.myCapExp.nonLaborSpendClassList) {
      this.myCapExp.nonLaborSpendClassList = [];
    }
    const selectedMetric = this.myCapExp.nonLaborSpendClassList.filter((x: { nonLaborCapitalExpenditure: string; }) => x.nonLaborCapitalExpenditure === param1);
  }

}
