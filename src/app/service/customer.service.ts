import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  selectedCustomer : Customer;
  customerList : Customer[];


  constructor( private http : Http ) {}


    postCustomer(cus: Customer) {
        const headers = new Headers();
        const options = new RequestOptions({ headers: headers });
        const url = 'http://localhost:4200/posts';
        return this.http.post('url', cus, options);
    }


    // getCustomerList(){
    //   const api = 'http://localhost:4200/posts';
    //   return this.http.get(api).pipe(map(res => res.json()));      
    // }
   

    getCustomerList(): Observable<any> {
        return this.http.get('http://localhost:4200/posts')
        .pipe(map(res => res.json()));
    }


}
