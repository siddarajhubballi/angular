// import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Content } from "../contents";

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  con:Content[];
  total:number = 0;
  items:string[] = [];
  constructor() {

    this.con = [
        {
          sno:1,
          title:"Blue Shirt",
          des:"A blue coloured shirt for kids of age 0-6 months.",
          buy:false,
          price:500
        },
        {
          sno:2,
          title:"Lunch Kit",
          des:"A kit consists of a beautiful lunch box, a kids 500ml water bottle.",
          buy:false,
          price:200
        },
        {
          sno:3,
          title:"Baby Powder",
          des:"A non-toxic baby powder that protects your baby from rashes and brings good fragrance.",
          buy:false,
          price:80
        },
        {
          sno:4,
          title:"Bicycle",
          des:"A cycle that has support wheels and your childs favourite cartoon painted on it.",
          buy:false,
          price:6000
        },
        {
          sno:5,
          title:"Dew soap",
          des:"A soap that is chemical free and gives gentle wash to your baby (0-6 months).",
          buy:false,
          price:75
        }
      ]

   }
  ngOnInit(): void {
  }

  buyProduct(item:Content) {
    alert("Product Buyed : " + item.title + "\n" + "Item of price = " + item.price);
    this.total = this.total + item.price;
    this.items.push(item.title);
    alert("Products Purchased : " + this.items + "\n" + "Bill = " + this.total);
  }

}
