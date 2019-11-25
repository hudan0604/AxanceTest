import { Component, OnInit } from '@angular/core';
import { articleModel } from '../models/articleModel';

/**
 * the products component
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
/**
 * The products component
 */
export class ProductsComponent implements OnInit {
  /**
   * boolean for sorting
   */
  order = false;
  /**
   * array of products of type articleModel
   */
  listOfProducts: Array<articleModel>;
  /**
   * page index for pagination
   */
  page = 1;
  /**
   * @ignore
   */
  constructor() {}
  /**
   * Initialization of the component
   */
  ngOnInit() {
    /**
     *  hard coded list of products
     */
    this.listOfProducts = [
      { name: 'Picklesuit', creator: 'John Deere', price: 225, url: '' },
      { name: 'Tapeki', creator: 'Joseph Lincoln', price: 560, url: '' },
      {
        name: 'Okiny',
        creator: 'James Stuart',
        price: 205,
        url: ''
      },
      { name: 'Kiunar', creator: 'Paul Jinks', price: 165, url: '' },
      { name: 'Hiamou', creator: 'Bob Kilmes', price: 50, url: '' },
      { name: 'Hakanius', creator: 'William Smith', price: 225, url: '' },
      { name: 'NyuGer', creator: 'Michael Johnson', price: 673, url: '' },
      { name: 'Liasun', creator: 'David Brown', price: 456, url: '' },
      { name: 'Praferos', creator: 'Richard Jones', price: 567, url: '' },
      { name: 'Klasins', creator: 'John Miller', price: 89, url: '' },
      { name: 'Partic', creator: 'Charles Davis', price: 45, url: '' },
      { name: 'Oceanic', creator: 'Daniel Wilson', price: 356, url: '' },
      { name: 'Nauenj', creator: 'Christopher Anderson', price: 789, url: '' },
      { name: 'Jartuisj', creator: 'Thomas Taylor', price: 123, url: '' },
      { name: 'Louniosnc', creator: 'Mark Moore', price: 469, url: '' },
      { name: 'Jaisusns', creator: 'Donald Jackson', price: 534, url: '' },
      { name: 'Chausiss', creator: 'George Martin', price: 367, url: '' },
      { name: 'Opoiuts', creator: 'Kenneth Lee', price: 234, url: '' },
      { name: 'zdeknzel', creator: 'Steven White', price: 478, url: '' },
      { name: 'shshshs', creator: 'Edward Harris', price: 987, url: '' },
      { name: 'euzedlbzef', creator: 'Brian Clark', price: 678, url: '' },
      { name: 'papjecjbe', creator: 'Ronald Allen', price: 2876, url: '' },
      { name: 'eoroeif', creator: 'Matthew King', price: 346, url: '' },
      { name: 'ozuezz', creator: 'Jason Wright', price: 35, url: '' },
      { name: 'slaoeieub', creator: 'Kevin Scott', price: 698, url: '' }
    ];
  }
  /**
   * @param {string} article  The product
   *
   * @returns the product's url in the assets directory
   */
  getArticleImageUrl(article: { name: any }): string {
    return `../assets/images/products/${article.name}.jpg`;
  }
  /**
   * Sorting method
   *
   * each time we click, the boolean changes its value
   * to see/hide the arrow up and down icons
   *
   * And to know if we apply the ascending or descending sorting
   */
  sortBy(): void {
    this.order = !this.order;
    if (this.order) {
      this.listOfProducts = this.listOfProducts.sort((prev, next) =>
        prev.price < next.price ? -1 : 1
      );
    } else
      this.listOfProducts = this.listOfProducts.sort((prev, next) =>
        prev.price < next.price ? 1 : -1
      );
  }
}
