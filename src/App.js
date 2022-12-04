import "./App.css";
import Card from "./lib/components/Card";

const testData = [
  {
    id: 1,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=720",
    link: "https://google.com",
  },
  {
    id: 2,
    title: "Test Title With Some Long Text To Verify that the line clamp is working",
    description: "This is a long description. This is to verify that line-clamp is indeed working correctly. If not there will be a third line.",
    image: "https://dev.realtorspk.com/commercial/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fs2s-mark%2Fimage%2Fupload%2Fv1665747512%2Fresources%2Fukf5dzziy873vbfvrbmb.webp&w=3840&q=75",
    link: "https://google.com",
  },
  {
    id: 3,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-656456202599059844/original/4dd9802c-0f7b-4eae-b535-e28c7904f332.jpeg?im_w=720",
    link: "https://google.com",
  },
  {
    id: 4,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720",
    link: "https://google.com",
  },
  {
    id: 5,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720",
    link: "https://google.com",
  },
  {
    id: 6,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720",
    link: "https://google.com",
  },
  {
    id: 7,
    title: "Test Title",
    description: "Test Description",
    image: "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720",
    link: "https://google.com",
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
