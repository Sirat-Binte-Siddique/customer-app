import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../../service/customer.service';
import { Customer } from '../../../service/customer.model';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

    // public customerList;
    constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // this.customerService.getCustomerList().subscribe( res => {
    //     this.customerList = res;
    //     console.log(this.customerList);
    //     console.log("CustomerList connected");
    // });
  }

    onSubmit(form: NgForm) {
        this.customerService.loginCustomer(form.value).subscribe(res => {
            console.log(res);
        },
            err => {
                console.log("something wrong");
            }
        );
    }


}