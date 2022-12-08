import React from 'react';
import "./App.css";
import Card from "./lib/components/Card";

const testData = [
  {
    id: 1,
    title: "Test Title",
    description: "Test Description",
    image: "https://mobilemall.pk/public_html/images/product/product_1631796086iphone-13-pro-max-gold-select.png",
    link: "https://google.com",
    price: {
      currency: "PKR",
      min: "100000",
      max: "200000",
    },
  },
  {
    id: 2,
    title: "iPhone 14 Pro Max",
    description: "This is a long description. This is to verify that line-clamp is indeed working correctly. If not there will be a third line.",
    image: "https://cdn.homeshopping.pk/product_images/w/174/61IJBsHm97L._FM__59558_zoom.jpg",
    link: "https://google.com",
    price: {
      currency: "PKR",
      min: "100000",
      max: "200000",
    },
  },
  {
    id: 3,
    title: "Test Title",
    image: "https://www.deccanherald.com/sites/dh/files/articleimages/2021/10/26/aiphone13pm-fcvs-sel-1-1037991-1635242483.jpg",
    link: "https://google.com",
    price: {
      currency: "PKR",
      min: "100000",
      max: "200000",
    },
  },
  {
    id: 4,
    title: "Test Title",
    description: "Test Description",
    image: "https://images.priceoye.pk/review/3916/133872-rjs00.jpeg",
    link: "https://google.com",
    price: {
      currency: "PKR",
      min: "100000",
      max: "200000",
    },
  },
  {
    id: 5,
    title: "Test Title",
    description: "Test Description",
    image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-Pro-color-lineup-220308_big_carousel.jpg.large.jpg",
    link: "https://google.com",
    price: {
      currency: "PKR",
      min: "100000",
      max: "200000",
    },
  },
  {
    id: 6,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/1db57275-c036-4dbf-b896-32ee22253e48.jpg?im_w=720",
    link: "https://google.com",
    price: {
      currency: "PKR",
      min: "1000000",
      max: "2000000",
    },
  },
  {
    id: 7,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/c5a34d20-8090-4d57-a811-02f6f1d24458.jpg?im_w=720",
    link: "https://google.com",
    price: {
      currency: "PKR",
      min: "100000",
      max: "200000",
    },
  },
  {
    id: 8,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-622846191464116690/original/0233390c-7aa4-4cec-81f6-6249f21678ac.jpeg?im_w=720",
    link: "https://google.com",
    price: {
      currency: "PKR",
      min: "100000",
      max: "200000",
    },
  },
];

function App() {
  return (
    <div className="App">
      <Card data={testData} />
    </div>
  );
}

export default App;
