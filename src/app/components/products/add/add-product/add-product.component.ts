import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserProduct } from '../../../../shared/models/userProduct.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  product: UserProduct = new UserProduct();
  success = false;

  onSubmit() {
    // Qui puoi aggiungere la logica per salvare il prodotto
    this.success = true;
    setTimeout(() => (this.success = false), 2000);
    this.product = new UserProduct();
  }
}
