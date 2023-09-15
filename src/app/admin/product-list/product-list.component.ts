import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/entity/product';
import { SdaHttpClient } from 'src/app/services/data-layer/sda-be-mock.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productId: number = 0;
  isEditMode: boolean = false;

  product: Product = {
    title: '',
    pName: '',
    category: '',
    description: '',
    id: 0
  }

  constructor(private route: ActivatedRoute, private dbService: SdaHttpClient<Product>) {
    this.productId = this.route.snapshot.params['id'];
    this.isEditMode = this.productId != 0 && this.productId != undefined;
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.getUserData(this.productId)
    }
  }


  getUserData(id: number) {
    this.dbService.getById('Product', id).subscribe((product: Product) => {
      this.product = product
    })
  }

  save() {
    if (this.isEditMode) {
      this.dbService.put('Product', this.productId + 1, this.product).subscribe((res) => {
        console.log(res);
        alert("Product updated")
      })
    } else {
      this.dbService.post('Product', this.product).subscribe((res) => {
        console.log(res);
        alert("Product created")
      })
    }
  }
}
