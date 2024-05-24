
export interface Product {
    title: string,
    id: number,
    image: string,
    description: string,
    rating: {
      rate: number,
      count: number
    },
    price: number,
    category: string,
  }
  

  export interface CartItem extends Product{
    quantity: number;
  }