import { Image } from "sanity"

export type InventoryItem = {
  id: string
  name: string
  price: number
  image: string
  category: "herbs" | "oils" | "supplements" | "wellness" | "consultation" | "diet"
  description: string
  benefits: string[]
}

export const inventory: InventoryItem[] = [
  {
    id: "herb-001",
    name: "Organic Gotukola",
    price: 1200,
    image: "/images/products/gotukola.jpg",
    category: "herbs",
    description: "Fresh, organic Gotukola (Centella asiatica) known for its memory-enhancing properties",
    benefits: ["Improves memory", "Reduces anxiety", "Promotes longevity"],
  },
  {
    id: "oil-001",
    name: "Traditional Thala Oil",
    price: 2500,
    image: "/images/products/thala-oil.jpg",
    category: "oils",
    description: "Pure sesame oil prepared according to traditional methods",
    benefits: ["Hair care", "Joint health", "Skin nourishment"],
  },
  // Add more products as needed
]
