
export interface Product {
    title: string,
    id: number,
    image: string,
    description: string,
    rating: {
      rate: number,
      count: number
    },
    price: number
  }
  