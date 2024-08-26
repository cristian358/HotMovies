import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './svg-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SvgIconComponent implements OnChanges {

  @Input() src?: string;
  @Input() class?: string;
  @Input() angClass?: string;
  @ViewChild('svgContainer', { static: true }) svgContainerRef!: ElementRef;
  @HostBinding('style.display') display = 'inline-flex';

  constructor(private http: HttpClient) { }

  ngOnChanges() {
    if (!this.src) return;
    this.http.get(this.src, { responseType: 'text' }).subscribe((data) => {
      const div = this.svgContainerRef.nativeElement;
      if (div) {
        div.innerHTML = data;
        this.applyClasses();
      }
    });
  }

  private applyClasses() {
    const svg = this.svgContainerRef.nativeElement.querySelector('svg');
    if (svg) {
      if (this.class) {
        svg.setAttribute('class', this.class);
      }
      if (this.angClass) {
        svg.classList.add(...this.angClass.split(' '));
      }
    }
   }
}