
const arr = ['https://www.turebi.ge/uploads/photos/tours1/large/33052_6.jpg?v=0', 'https://angi.ge/wp-content/gallery/e1839ce18398e18399e1839de183a0e183ace1839be18398e1839ce18393e18390/DSCN0911%E1%83%90%E1%83%90%E1%83%90%E1%83%90%E1%83%90a.jpg', 'https://cdnn1.img.sputnik-georgia.com/img/07e6/0b/0a/272090439_0:65:2048:1217_1920x0_80_0_0_8d85315cb53937ec638916536877a09c.jpg'];

const images = (
  <div>
    {arr.map((value, index) => {
      return <img src={value} alt='https://answers-afd.microsoft.com/static/images/image-not-found.jpg' key={index} />;
    })}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(images);