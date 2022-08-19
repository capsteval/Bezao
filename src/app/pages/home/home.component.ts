import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  menuItems = [
    {
      imgSrc: '../../../assets/icons/image1.svg',
      name: 'Jollof rice',
      description:
        'Fried potato/yam chips with egg sauce or any topping of your choice',
      price: ' ₦ 1,500',
    },
    {
      imgSrc: '../../../assets/images/Rectangle 82.svg',
      name: 'Swallow with Draw Soup',
      description:
        'Fried potato/yam chips with egg sauce or any topping of your choice',
      price: ' ₦ 1,000',
    },
    {
      imgSrc: '../../../assets/images/frieswthegg.svg',
      name: 'Fries with Egg sauce',
      description:
        'Fried potato/yam chips with egg sauce or any topping of your choice',
      price: ' ₦ 1,500',
    },
    {
      imgSrc: '../../../assets/images/egusi.svg',
      name: 'Swallow with Egusi Soup',
      description: 'Nicely cooked egusi soup and eba',
      price: ' ₦ 1,500',
    },
    {
      imgSrc: '../../../assets/images/beans-plaintain.svg',
      name: 'Beans',
      description:
        'Fried potato/yam chips with egg sauce or any topping of your choice',
      price: ' ₦ 700',
    },
    {
      imgSrc: '../../../assets/images/fried-rice.svg',
      name: 'Fried Rice',
      description:
        'Fried potato/yam chips with egg sauce or any topping of your choice',
      price: ' ₦ 700',
    },
  ];

  blogPost = [
    {
      imgSrc: '../../../assets/icons/post-image.svg',
      dateCreated: '01 October 2019',
      title: 'Better Than Takeout Kung Pao Chicken',
      paragraph:
        'This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe ',
    },
    {
      imgSrc: '../../../assets/images/kunppao.svg',
      dateCreated: '01 October 2019',
      title: 'The Best Sesame Soy Broccoli Salad',
      paragraph:
        'Hello broccoli salad! Broccoli salad with a sweet and tangy dressing is my new go to for summer parties.  ',
    },
    {
      imgSrc: '../../../assets/images/best-sesame.svg',
      dateCreated: '01 October 2019',
      title: 'Better Than Takeout Kung Pao Chicken',
      paragraph:
        'This super easy version of dan dan noodles is fast, flavorful, and vegetarian to boot. It’s definitely ',
    },
  ];
  ngOnInit(): void {}
}
