const data = [
  {
    id: 1,
    name: "NIBOSI Men's Watches Analog Quartz Starry Dial Watches",
    image: "https://m.media-amazon.com/images/I/71oFR3c7X2L._SX425_.jpg",
    price: 255,
    cat: "Dress",
  },
  {
    id: 2,
    name: "OLEVS Luxury Analogue Men's Watch",
    image: "https://m.media-amazon.com/images/I/71dvjXIrQEL._SX522_.jpg",
    price: 155,
    cat: "Sport",
  },
  {
    id: 3,
    name: "GUESS Black Dial Men Watch - U0990G6M",
    image: "https://m.media-amazon.com/images/I/51DJ8L4ZHJL._SY500_.jpg",
    price: 55,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "SKMEI Men's Watch New Wheels Rolling",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71dM2Ekfk0L._AC_UL160_SR160,160_.jpg",
    price: 355,
    cat: "Casual",
  },
  {
    id: 5,
    name: "Gold Watch for Men,Stainless Steel Quartz Watches",
    image: "https://m.media-amazon.com/images/I/71VxRe7HeKL._SX522_.jpg",
    price: 85,
    cat: "Dress",
  },
  {
    id: 6,
    name: "Armani Exchange Analog Black Dial Unisex's Watch",
    image: "https://m.media-amazon.com/images/I/71uQEDeE64L._SX425_.jpg",
    price: 185,
    cat: "Sport",
  },
  {
    id: 7,
    name: "Fossil Sullivan Analog Black Dial Men's Watch",
    image: "https://m.media-amazon.com/images/I/71kLNaEmOzL._SX522_.jpg",
    price: 485,
    cat: "Luxury",
  },
  {
    id: 8,
    name: "Fossil Grant Chronograph Analog Black Dial Men's Watch",
    image: "https://m.media-amazon.com/images/I/51f0gIYCcSL._SX522_.jpg",
    price: 125,
    cat: "Dress",
  },
  {
    id: 9,
    name: "Armani Exchange Analog Black Dial Men's Watch",
    image: "https://m.media-amazon.com/images/I/71WvfLYxPRL._SX425_.jpg",
    price: 285,
    cat: "Sport",
  },
  {
    id: 10,
    name: "Bulova Men's Classic 3-Hand Quartz Black Leather Strap Watch",
    image:
      "https://m.media-amazon.com/images/I/41gAkSjnBjL._SX300_SY300_QL70_FMwebp_.jpg",
    price: 385,
    cat: "Casual",
  },
];

const productContainer = document.querySelector(".products");
const categoriesContainer = document.querySelector(".cats");
const searchInput = document.querySelector(".search");
const priceRange = document.querySelector(".price-range");
const priceValue = document.querySelector(".price-value");

const renderProduct = (filterProducts) => {
  productContainer.innerHTML = filterProducts
    .map(
      (product) =>
        `
      <div class="product">
        <img
          src="${product.image}"
          alt=""
        />
        <span class="name">${product.name}</span>
        <span class="price">$${product.price}</span>
      </div>
    
    `
    )
    .join("");
};

renderProduct(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    renderProduct(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else renderProduct(data);
});

const setCategories = () => {
  let allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, index) => {
      return allCats.indexOf(item) === index;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (item) =>
        `
          <span class="cat">${item}</span>
      
        `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? renderProduct(data)
      : renderProduct(data.filter((item) => item.cat == selectedCat));
  });
};

function setPrices() {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;

  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    renderProduct(data.filter((item) => item.price <= e.target.value));
  });
}

setCategories();
setPrices();
