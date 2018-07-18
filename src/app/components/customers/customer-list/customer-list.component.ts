import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

    constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}

