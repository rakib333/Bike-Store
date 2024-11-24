export interface Product {
  name: string; // The name of the bike
  brand: string; // The manufacturer or brand of the bike
  price: number; // Price of the bike
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'; // Type of bike
  description?: string; // A brief description of the bike
  quantity: number; // Quantity of the bike available
  inStock: boolean; // Indicates if the bike is in stock
}
