import { Component, OnInit } from '@angular/core';

import { RadioOption } from '../shared/radio/radio-option.model'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  constructor() { }

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ]

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

}
