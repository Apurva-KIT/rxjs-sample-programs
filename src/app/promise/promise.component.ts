import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  result1: string = 'Data';
  result2: string = 'Data';
  result3: string = 'Data';

  buyLaptopPromise: Promise<ILaptop>;

  buyLaptop = fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=> response.json())

  constructor() {
    this.buyLaptopPromise = this.createPromise();
  }

  ngOnInit(): void {
  }

  createPromise() {
    return (new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(dell);
        }, 3000);
      }
      catch {
        reject('Error Occured');
      }

    })) as Promise<ILaptop>
  }


  /**Ex -01 With Promise */

  fetch1() {
    this.result1 = 'Fetching Data...';
    this.buyLaptopPromise.then((result) => {
      this.result1 = JSON.stringify(result);
    })
  }

  /**Ex -02 With Promise */

  async fetch2() {
    this.result2 = 'Fetching Data...';
    let res = await this.buyLaptopPromise;

    this.result2 = JSON.stringify(res);
  }


  /**Ex -03 With Promise */
  
  async fetch3() {
    this.result3 = 'Fetching Data...';
    let res = await this.buyLaptop;

    this.result3 = JSON.stringify(res);
  }

}

let dell: ILaptop = {
  brand: 'Dell',
  hardDisk: '2 TB',
  color: 'Black'
}


interface ILaptop {
  brand: string;
  hardDisk: string;
  color: string;
}