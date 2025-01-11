import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSlicePipe } from 'src/app/pipes/textSlice.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, TextSlicePipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: any;
}
