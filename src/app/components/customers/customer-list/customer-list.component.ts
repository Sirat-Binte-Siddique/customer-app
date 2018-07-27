import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { Customer } from '../../../service/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

    public allcustomerlist;

    constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerList().subscribe( res => {
      this.allcustomerlist = res;
      console.log(this.allcustomerlist);
    }); 

  }

}