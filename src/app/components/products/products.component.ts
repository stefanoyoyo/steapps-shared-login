import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserProduct } from '../../shared/models/userProduct.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: UserProduct[] = [
    {
      link: 'https://www.giardiniblog.it/wp-content/uploads/2022/05/immagine-tramonto-gratis.jpg',
      name: 'Prodotto 1',
      description: 'Descrizione del prodotto 1',
    },
    {
      link: 'https://cdn.pixabay.com/photo/2022/07/05/11/06/mountains-7302806__480.jpg',
      name: 'Prodotto 2',
      description: 'Descrizione del prodotto 2',
    },
    {
      link: 'https://tse2.mm.bing.net/th/id/OIP.4nY4Ys05hzDoNVpPJemNHwHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      name: 'Prodotto 3',
      description: 'Descrizione del prodotto 3',
    },
  ];

  constructor() {
    // Logica per caricare i prodotti può essere aggiunta qui
  }
}
// This component represents a products area accessible only after login.
