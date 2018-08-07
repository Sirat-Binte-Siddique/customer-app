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


    registerCustomer(cus: any) {
        console.log(cus);
        const headers = new Headers();
        const options = new RequestOptions({ headers: headers });
        return this.http.post('https://node-api-backend.herokuapp.com/api/register', cus, options).pipe(map(x => x.json()));
    }

    loginCustomer(cus: any) {
        console.log(cus);
        const headers = new Headers();
        const options = new RequestOptions({ headers: headers });
        return this.http.post('https://node-api-backend.herokuapp.com/api/login', cus, options).pipe(map(x => x.json()));
    }

    // getCustomerList(): Observable<Customer[]> {
    //     return this.http.get('https://jsonplaceholder.typicode.com/todos')
    //     .pipe(map(res => res.json()));
    // }

}