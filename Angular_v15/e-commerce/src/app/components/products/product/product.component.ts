import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  ProductHeading = 'Products';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void { 
    this.router.paramMap.subscribe(params => {
      console.log(params);
      if(params && params.get('id')) {
        this.ProductHeading = 'Product Details';
      }
    })
  }

}
