import { Component, Input } from '@angular/core';
import { Produto } from '../../shared/models/Produto';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-listar-produtos',
  imports: [FormsModule],
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.scss',
})
export class ListarProdutos {
@Input() produtos: Produto[] = [];

 valorTota: number = 0;

    valorTotal(produtos: Produto) {
      for(let e = 0; e < this.produtos.length; e++){
        this.valorTota += produtos.preco;
    }
  }
}


