import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-review',
  imports: [],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css',
})
export class ProductReviewComponent implements OnInit {
  productId: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
