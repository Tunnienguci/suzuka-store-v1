import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  orderSetting = {
    modalName: 'createOrder',
    size: 'xl',
    modalTitle: 'Đơn Hàng',
    btnSave: 'Đã Nhập Đơn',
    btnClose: 'Đóng',
    type: 'order',
    data: {
      id: 'SP0001',
      name: 'Product 1',
      price: 100,
      quantity: 10,
      description: 'Description 1',
    },
  };

  orderHeader = [
    {
      key: 'id',
      label: 'ID',
      type: 'text',
    },
    {
      key: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      key: 'price',
      label: 'Price',
      type: 'text',
    },
    {
      key: 'quantity',
      label: 'Quantity',
      type: 'text',
    },
    {
      key: 'description',
      label: 'Description',
      type: 'text',
    },
  ];

  orderData = [
    {
      id: 'SP0001',
      name: 'Product 1',
      price: 100,
      quantity: 10,
      description: 'Description 1',
    },
    {
      id: 'SP0002',
      name: 'Product 2',
      price: 200,
      quantity: 20,
      description: 'Description 2',
    },
    {
      id: 'SP0003',
      name: 'Product 3',
      price: 300,
      quantity: 30,
      description: 'Description 3',
    },
  ];
}
