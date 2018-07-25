import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { Customer } from './customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer : Customer;
//   customerList : Customer[];

  constructor( private http : Http ) {}

    postCustomer(cus: Customer) {
        const headers = new Headers();
        const options = new RequestOptions({ headers: headers });
        const url = 'http://localhost:4200/api/create';
        return this.http.post('url', cus, options);
    }

    // getCustomerList(){
    //     this.http.get('http://localhost:4200/api/create')

    // }


}
