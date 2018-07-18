import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Customer } from './customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer : Customer;
  constructor( private http : Http ) {}

    // postCustomer(cus: Customer) {
    //     // var body = JSON.stringify(cus);
    //     // var headerOptions = new Headers({ 'Content-Type' : 'application/json' });
    //     // var requestOptions = new RequestOptions({method : RequestMethod.Post, headers: headerOptions});
    //     // return this.http.post('http://localhost:4200/api/customers', body, requestOptions).map(x => x.json());

    //     // headers.append('Authorization', 'Bearer' + this.getToken()); // this will need for token authintication but not now
    // }


    postCustomer(cus: Customer) {
        const headers = new Headers();
        const options = new RequestOptions({ headers: headers });
        const url = 'http://localhost:4200/posts';
        return this.http.post('url', cus, options);
    }



}
