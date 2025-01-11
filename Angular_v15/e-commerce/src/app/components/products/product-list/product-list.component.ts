import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/common/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SkeletonLoaderComponent } from 'src/app/includes/skeleton-loader/skeleton-loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SkeletonLoaderComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; 
  @Output() productsLength = new EventEmitter<number>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.dataService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  sendProductsLength() {
    this.productsLength.emit(this.products.length);
  }
 
}
