export const paintings = [];

// 6 разных базовых картин
const baseSix = [
  { 
    title: "CASCATE DI TIVOLI", 
    year: 1761, 
    artist: "Giovanni Battista Piranesi", 
    location: "Tivoli", 
    image: "/my-app/images/1.jpg" 
  },
  { 
    title: "PORTRAIT OF VAN GOGH", 
    year: 1888, 
    artist: "Vincent van Gogh", 
    location: "Paris", 
    image: "/my-app//images/2.png" 
  },
  { 
    title: "UNEQUAL MARRIAGE", 
    year: 1862, 
    artist: "Vasily Pukirev", 
    location: "Moscow", 
    image: "/my-app//images/3.png" 
  },
  { 
    title: "THE HAPPY VIOLINIST", 
    year: 1624, 
    artist: "Gerard van Honthorst", 
    location: "Amsterdam", 
    image: "/my-app//images/4.png" 
  },
  { 
    title: "THE ARCADIAN", 
    year: 1834, 
    artist: "Thomas Cole", 
    location: "New York", 
    image: "/my-app//images/5.jpg" 
  },
  { 
    title: "GOLFO DI NAPOLI", 
    year: 1845, 
    artist: "Anton Sminck van Pitloo", 
    location: "Naples", 
    image: "/my-app//images/6.jpg" 
  }
];

// Повторяем эти 6 картин 20 раз (120 карточек всего)
for (let i = 0; i < 120; i++) {
  const base = baseSix[i % 6];
  paintings.push({
    id: i + 1,
    title: base.title,
    year: base.year,
    artist: base.artist,
    location: base.location,
    image: base.image
  });
}