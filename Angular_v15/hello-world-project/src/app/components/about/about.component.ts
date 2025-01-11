import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  load: boolean = false;
  @ViewChild('enter') element!: ElementRef<any>;

  constructor() { }

  loadContentDeferably() {
    this.load = true;
  }

  clickonme() {
    this.element.nativeElement.style.display = 'block';
  }

  onSelect(value: any) {
    console.log(value.target.options[value.target.options.selectedIndex].text);

  }
}
