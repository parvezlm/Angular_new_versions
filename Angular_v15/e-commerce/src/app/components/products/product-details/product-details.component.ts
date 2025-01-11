import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { TextSlicePipe } from 'src/app/pipes/textSlice.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, TextSlicePipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productInfo: any;

  constructor(private dataService: DataService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.productDetails(params['id']);
    })
  }

  productDetails(id: number) {
    this.dataService.getProductDetails(id).subscribe({
      next: res => {
        this.productInfo = res;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
