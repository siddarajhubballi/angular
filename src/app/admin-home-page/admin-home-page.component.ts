import { Component, OnInit } from '@angular/core';
import { Content } from "../contents";

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  // localItem;
  con:Content[];
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

   //  this.localItem = localStorage.getItem("contents");
   //  if(this.localItem == null){
   //  this.con = [];
   //  }
   //  else{
   //    this.con = JSON.parse(this.localItem);
   //  }
   //
   }

  ngOnInit(): void {
  }

  deleteContent(content:Content){
    console.log(content);
    const index = this.con.indexOf(content);
    this.con.splice(index, 1);
    localStorage.setItem("contents", JSON.stringify(this.con));
  }

}
