import ProductsList from "./components/ProductsList.jsx";

const App = () => {

  const data = [
    {
      name: "Milk",
      price: "$5.50",
      desription: "Milk for Chads🥛🍼",
      hearts: 20,
      image: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/09/20/Pictures/_61433f0c-bcb9-11e8-95ec-91800d079bb4.jpg"
    }, 

    {
      name: "Case for Iphone 11",
      price: "$11.00",
      desription: "Iphone good quality case",
      hearts: 36,
      image: "https://wonderfulengineering.com/wp-content/uploads/2019/09/best-cases-for-iPhone-11-2.jpg"
    },
    
    {
      name: "RGB LED",
      price: "$9.99",
      desription: "High quality RGB LEDs 50x50m",
      hearts: 78,
      image: "https://i5.walmartimages.com/asr/993feeff-c1c3-4131-bcc8-43e089b77580.07cfe39b20a9b351ab22df47536e1eab.jpeg"
    },

    {
      name: "Microphone",
      price: "$45.49",
      desription: "High quality RGB LEDs 50x50mGood cheap microphone",
      hearts: 41,
      image: "https://www.bhphotovideo.com/images/images2500x2500/samson_sagm1upro_large_diaphragm_studio_usb_1375180.jpg"
    }

  ];

  return (
    <div>
      <ProductsList data={data} />
    </div>
  )
}

export default App