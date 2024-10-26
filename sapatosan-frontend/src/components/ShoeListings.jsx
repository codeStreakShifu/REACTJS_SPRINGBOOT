
import './ShoeListings.css';
import logo from './logo.png';
import './HomePage.css';


const products = [
  {
    id: 1,
    name: 'Jordan Courtside 23',
    category: 'Men\'s Shoes',
    price: '₱3,699',
    originalPrice: '₱7,395',
    imgUrl: 'link-to-jordan-shoe-image', // replace with actual image URL
  },
  {
    id: 2,
    name: 'Nike Air Pegasus 2005',
    category: 'Women\'s Shoes',
    price: '₱5,039',
    originalPrice: '₱8,395',
    imgUrl: 'link-to-pegasus-shoe-image', // replace with actual image URL
  },
  {
    id: 3,
    name: 'Nike Air Span II SE',
    category: 'Men\'s Shoes',
    price: '₱2,599',
    originalPrice: '₱5,195',
    imgUrl: 'link-to-air-span-shoe-image', // replace with actual image URL
  }
];

function ShoeListings() {
  return (
    <div className="ShoeListings">
      <Header />
      
      {/* <Banner /> Pass the products as props to ProductGrid */}
      <ProductGrid products={products} />
    </div>
  );
}

function ShoeCategory (){
  return (
    <div className='test'>
      <a href="http://localhost:3000">
      Basketball Shoes
      </a>

      <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">
      Casual Shoes
      </a>

      <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">
      Running Shoes
      </a>

      <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">
      Soccer Shoes
      </a>

    </div>
  );
}

const Header = () => (
  
  <header className="header">

        <img src={logo} alt="Sapatosan Logo" className="logo" />

        <nav className="nav-links">

          <ShoeCategory/>
          

        </nav>

       


        <div className="account-links">
           <MyComponent/>
        </div>


      </header>
    
);

function MyComponent() {
  
  return <button onClick={navigateToBackend}>Logout</button>;
}

function navigateToBackend() {
  window.location.href = 'http://localhost:3000';
}


const Banner = () => (
  <div className="banner">
    <h1>Up to 55% Off*</h1>
  </div>
);

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product) => (
      // Pass each product object as a prop to ProductCard
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.imgUrl} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.category}</p>
    <p className="price">
      {product.price} <span className="original-price">{product.originalPrice}</span>
    </p>
  </div>
);

export default ShoeListings;
