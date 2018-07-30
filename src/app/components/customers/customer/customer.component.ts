import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../../service/customer.service';
import { Customer } from '../../../service/customer.model';


@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
    providers: [CustomerService]
})
export class CustomerComponent implements OnInit {

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.customerService.selectedCustomer = {
            FirstName: '',
            LastName: '',
            Position: '',
            Age: null,
            Categories: ''
        }
    }


    onSubmit(form : NgForm){
        console.log("submit button working");
        this.customerService.postCustomer(form.value)
        .subscribe(
            res => {
                this.resetForm(form);
                console.log(res);
            },
            err => {
                console.log("something wrong");
            }
        );
    }



}
