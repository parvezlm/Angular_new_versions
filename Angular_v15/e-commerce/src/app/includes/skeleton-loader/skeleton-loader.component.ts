import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillPipe } from 'src/app/pipes/fill.pipe';

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [CommonModule, FillPipe],
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {
  @Input() counts: number = 3;
}
