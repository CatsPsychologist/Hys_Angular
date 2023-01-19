export interface Products{
  id: number,
  name: string,
  price: number,
  isChosen: boolean,
  amount: number,
  identifier?: number,
}
export interface ProductsHttp{
  "name": string,
  "price": number,
  "description": string,
  "author": string,
  "extraInfo": {
    "ololo": number,
    "image": string
  },
  "createdAt": string,
  "updatedAt": string,
  "id": string
}

