export interface DataProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: "Beras" | "Minyak" | "Gula" | "Telur";
  onClick?: () => void;
  detail?: string; // Properti opsional untuk deskripsi lebih detail
}

export const data: DataProduct[] = [
  {
    id: "1",
    title: "Beras Premium 5kg",
    description: "Beras premium dengan kualitas terbaik dan pulen.",
    image: "",
    price: 75000,
    category: "Beras",
  },
  {
    id: "2",
    title: "Minyak Goreng 2L",
    description: "Minyak goreng berkualitas tinggi, cocok untuk memasak.",
    image: "",
    price: 30000,
    category: "Minyak",
  },
  {
    id: "3",
    title: "Gula Pasir 1kg",
    description:
      "Gula pasir putih berkualitas tinggi untuk kebutuhan dapur Anda.",
    image: "",
    price: 15000,
    category: "Gula",
  },
  {
    id: "4",
    title: "Telur Ayam 1 Lusin",
    description: "Telur ayam segar dari peternakan pilihan.",
    image: "",
    price: 28000,
    category: "Telur",
  },
  {
    id: "5",
    title: "Beras Medium 5kg",
    description: "Beras dengan kualitas medium dan harga terjangkau.",
    image: "",
    price: 65000,
    category: "Beras",
  },
  {
    id: "6",
    title: "Minyak Kelapa 1L",
    description: "Minyak kelapa alami untuk kebutuhan memasak dan kesehatan.",
    image: "",
    price: 45000,
    category: "Minyak",
  },
  {
    id: "7",
    title: "Gula Merah 500g",
    description: "Gula merah alami untuk tambahan rasa manis khas.",
    image: "",
    price: 12000,
    category: "Gula",
  },
  {
    id: "8",
    title: "Telur Omega 3 1 Lusin",
    description: "Telur ayam omega-3 untuk kesehatan lebih baik.",
    image: "",
    price: 35000,
    category: "Telur",
  },
  {
    id: "9",
    title: "Beras Organik 2kg",
    description: "Beras organik sehat tanpa pestisida.",
    image: "",
    price: 55000,
    category: "Beras",
  },
  {
    id: "10",
    title: "Minyak Jagung 1.8L",
    description: "Minyak jagung sehat dengan lemak tak jenuh tinggi.",
    image: "",
    price: 55000,
    category: "Minyak",
  },
];
