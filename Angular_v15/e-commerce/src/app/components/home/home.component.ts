import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/common/product';
import { map, take } from 'rxjs';
import { SkeletonLoaderComponent } from 'src/app/includes/skeleton-loader/skeleton-loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SkeletonLoaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public menClothingProducts: Product[] = [];
  public womenClothingProducts: Product[] = [];
  public jeweleryProducts: Product[] = [];
  public electronicsProducts: Product[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.dataService.getCategories().subscribe({
      next: (res: any) => {
        res.forEach((category: any) => {
          this.getCategoryProducts(category);
        });
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  };

  getCategoryProducts(category: string) {
    this.dataService.getCategoryProducts(category)
    .pipe(
      map((item: any) => item.slice(0, 4))
    ).subscribe({
      next: (res: any) => {
        switch (category) {
          case 'men\'s clothing':
            this.menClothingProducts = res;
            break;
          case 'women\'s clothing':
            this.womenClothingProducts = res;
            break;
          case 'jewelery':
            this.jeweleryProducts = res;
            break;
          case 'electronics':
            this.electronicsProducts = res;
            break;
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
