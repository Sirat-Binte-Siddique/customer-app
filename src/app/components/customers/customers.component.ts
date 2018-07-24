import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../service/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

    constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}
