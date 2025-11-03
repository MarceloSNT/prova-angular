export class Produto{
    constructor(
        public nome: string = '',
        public estoque: number = 0,
        public preco: number = 0,
        public qtd: number = 0,
        public img: string = '',
    ){}
}