
export const products = [
  {
    image_url: "/src/assets/products/red-rose.png",
    name: "Rose",
    category: "Plant",
    price: "5",
    product_id: 1,
    colors: [
      { name: "red", class: "bg-red-700", selectedClass: 'ring-gray-700' },
      { name: "yellow", class: "bg-yellow-700", selectedClass: 'ring-gray-400' },
      { name: "pink", class: "bg-pink-300", selectedClass: 'ring-gray-400' },
      { name: "white", class: "bg-white", selectedClass: 'ring-gray-400' },
    ],
    description: "The timeless symbol of love, our classic red roses are rich, passionate, and irresistible. Express your deepest affection with these velvety petals and elegant long stems. \n The vibrant yellow rose signifies joy, friendship, and the warmth of the sun. Send them to spread happiness and positivity. \n Soft and delicate, pink roses radiate affection and gratitude. Choose them to show your appreciation and admiration. \n Pure and enchanting, white roses represent purity and new beginnings. They\'re a superb choice for weddings and expressions of admiration",
    created_at: 'Tue Feb 14 2023 12:49:22 GMT-0500 (Central Daylight Time)'
  },
  {
    image_url: "src/assets/products/yellow-sunflower.png",
    name: "Sunflower",
    category: "Plant",
    price: "4",
    product_id: 2,
    colors: [
      { name: "yellow", class: "bg-yellow-700", selectedClass: 'ring-gray-700' },
    ],
    description: "Nature's vibrant masterpiece that brings the warmth of the sun right into your life. These iconic flowers are a symbol of joy, positivity, and endless possibilities, making them the perfect addition to any occasion",
    created_at: 'Mon Aug 10 2023 9:00:00 GMT-0500 (Central Daylight Time)'
  },
  {
    image_url: "src/assets/products/blue-hydrangea.png",
    name: "Hydrangea",
    category: "Plant",
    price: "5",
    product_id: 3,
    colors: [
      { name: "blue", class: "bg-blue-700", selectedClass: 'ring-gray-400' },
      { name: "pink", class: "bg-pink-300", selectedClass: 'ring-gray-400' },
      { name: "white", class: "bg-white", selectedClass: 'ring-gray-400' },
    ],
    description: "These enchanting blooms are the epitome of grace and charm, making them a beloved choice for any occasion. From weddings to heartfelt celebrations, hydrangeas are the perfect floral companions for life's special moments",
    created_at: 'Sat Apr 12 2023 20:30:00 GMT-0500 (Central Daylight Time)'
  },
  {
    image_url: "src/assets/products/white-daisy.png",
    name: "Daisy",
    category: "Plant",
    price: "3",
    product_id: 4,
    colors: [
      { name: "white", class: "bg-white", selectedClass: 'ring-gray-400' },
      { name: "pink", class: "bg-pink-300", selectedClass: 'ring-gray-700' },
    ],
    description: "Step into the world of daisies, where simplicity and joy come together in a beautiful symphony of nature. These charming, unpretentious flowers are a true embodiment of purity and cheerfulness, making them a perfect choice for brightening any occasion",
    created_at: 'Sun Oct 08 2023 18:49:22 GMT-0500 (Central Daylight Time)'
  },
  // {
  //   image_url: "src/assets/products/red-rose-bouquet.webp",
  //   name: "Rose Bouquet",
  //   category: "Arrangement",
  //   price: "8",
  //   product_id: 5,
  //   colors: [
  //     { name: "red", class: "bg-red-700", selectedClass: 'ring-gray-700' },
  //     { name: "blue", class: "bg-blue-700", selectedClass: 'ring-gray-700' },
  //     { name: "yellow", class: "bg-yellow-700", selectedClass: 'ring-gray-400' },
  //     { name: "green", class: "bg-green-600", selectedClass: 'ring-gray-700' },
  //     { name: "white", class: "bg-white", selectedClass: 'ring-gray-400' },
  //   ],
  //   description: 'This is a beautiful flower you can buy',
  //   created_at: 'Wed Sep 25 2023 15:45:00 GMT-0500 (Central Daylight Time)'
  // },
  // {
  //   image_url: "src/assets/products/red-rose-bouquet.webp",
  //   name: "Rose Bouquet",
  //   category: "Arrangement",
  //   price: "10",
  //   product_id: 6,
  //   colors: [
  //     { name: "red", class: "bg-red-700", selectedClass: 'ring-gray-700' },
  //     { name: "blue", class: "bg-blue-700", selectedClass: 'ring-gray-700' },
  //     { name: "yellow", class: "bg-yellow-700", selectedClass: 'ring-gray-400' },
  //     { name: "green", class: "bg-green-600", selectedClass: 'ring-gray-700' },
  //     { name: "white", class: "bg-white", selectedClass: 'ring-gray-400' },
  //   ],
  //   description: 'This is a beautiful flower you can buy',
  //   created_at: 'Thu Jul 26 2023 16:45:00 GMT-0500 (Central Daylight Time)'
  // },
  // {
  //   image_url: "src/assets/products/red-rose-bouquet.webp",
  //   name: "Rose Bouquet",
  //   category: "Arrangement",
  //   price: "9",
  //   product_id: 7,
  //   colors: [
  //     { name: "red", class: "bg-red-700", selectedClass: 'ring-gray-700' },
  //     { name: "blue", class: "bg-blue-700", selectedClass: 'ring-gray-700' },
  //     { name: "yellow", class: "bg-yellow-700", selectedClass: 'ring-gray-400' },
  //     { name: "green", class: "bg-green-600", selectedClass: 'ring-gray-700' },
  //     { name: "white", class: "bg-white", selectedClass: 'ring-gray-400' },
  //   ],
  //   description: 'This is a beautiful flower you can buy',
  //   created_at: 'Fri Jun 01 2023 12:15:22 GMT-0500 (Central Daylight Time)'
  // },
  // {
  //   image_url: "src/assets/products/red-rose-bouquet.webp",
  //   name: "Rose Bouquet",
  //   category: "Bouquet",
  //   price: "12",
  //   product_id: 8,
  //   colors: [
  //     { name: "red", class: "bg-red-700", selectedClass: 'ring-gray-700' },
  //   ],
  //   description: 'This is a beautiful flower you can buy',
  //   created_at: 'Wed Apr 08 2023 18:49:22 GMT-0500 (Central Daylight Time)'
  // },
  // {
  //   image_url: "src/assets/products/red-rose-bouquet.webp",
  //   name: "Rose Bouquet",
  //   category: "Bouquet",
  //   price: "15",
  //   product_id: 9,
  //   colors: [
  //     { name: "white", class: "bg-white", selectedClass: 'ring-gray-400' },
  //   ],
  //   description: 'This is a beautiful flower you can buy',
  //   created_at: 'Tue Oct 02 2023 18:49:22 GMT-0500 (Central Daylight Time)'
  // },
  // {
  //   image_url: "src/assets/products/red-rose-bouquet.webp",
  //   name: "Rose Bouquet",
  //   category: "Bouquet",
  //   price: "13",
  //   product_id: 10,
  //   colors: [
  //     { name: "yellow", class: "bg-yellow-700", selectedClass: 'ring-gray-400' },
  //   ],
  //   description: 'This is a beautiful flower you can buy',
  //   created_at: 'Sun Jan 21 2023 18:49:22 GMT-0500 (Central Daylight Time)'
  // },
];