import logo from './logo.svg';
import './App.css';
import Product from './Product';

const products = [
  { name: 'Sprite', expirationDate: '2024-12-31', image:"https://www.bigbasket.com/media/uploads/p/xxl/276214-8_2-sprite-soft-drink-lime-flavoured.jpg" },
  { name: 'Rockstar No Sugar', expirationDate: '2022-10-15', image:"https://gopotatoes.co.nz/cdn/shop/files/5302196.png?v=1691970541" },
  { name: 'Red Bull', expirationDate: '2024-10-15', image:"https://clink.ph/cdn/shop/products/WEB-red-bull-250ml_800x.png?v=1622626748" },
  { name: 'Rockstar', expirationDate: '2022-10-15', image:"https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjU3ZDZkYWUyNGJjNjZmNDNlOGIzY2VjNzUxMjRhMjI3Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=9188953bef1e966209f16fc8764ba247eac95345644fc57ad5992e177e099176" },
  { name: 'Rockstar', expirationDate: '2022-10-15', image:"https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjU3ZDZkYWUyNGJjNjZmNDNlOGIzY2VjNzUxMjRhMjI3Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=9188953bef1e966209f16fc8764ba247eac95345644fc57ad5992e177e099176" },
  { name: 'Rockstar', expirationDate: '2022-10-15', image:"https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjU3ZDZkYWUyNGJjNjZmNDNlOGIzY2VjNzUxMjRhMjI3Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=9188953bef1e966209f16fc8764ba247eac95345644fc57ad5992e177e099176" },
  // Add more products here
];


function App() {
  return (
    <div className="App">
     <Product products={products} ></Product>
    </div>
  );
}

export default App;
