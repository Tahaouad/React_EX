import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import ProductSlider from './ProductsSlide';
import Decouvrir from './Decouvrir';

const images = ['slide-a-1.png', 'slide-3-1.png', 'slide-b-1.png']
const Products = ({ products }) => {
  const prod = [
    {
      id: 1,
      image: 'Tenu1.PNG',
      libelle: 'Maillot Domicile Green',
      prix: '490.00 DH'
    },
    {
      id: 2,
      image: 'Tenu2.PNG',
      libelle: 'Maillot Domicile White',
      prix: '490.00 DH'
    },
    {
      id: 3,
      image: 'Tenu3PNG.PNG',
      libelle: 'Polo Raja club Black',
      prix: '300.00 DH'
    },
    {
      id: 4,
      image: 'Tenu4PNG.PNG',
      libelle: 'Polo Raja club Green',
      prix: '300.00 DH'
    },
    {
      id: 5,
      image: 'Tenu5PNG.PNG',
      libelle: 'Maillot Domicile Black',
      prix: '500.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    },

    {
      id: 7,
      image: 'Pull2PNG.PNG',
      libelle: 'Pull Gray Raja club',
      prix: '299.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    }, {
      id: 1,
      image: 'Tenu1.PNG',
      libelle: 'Maillot Domicile Green',
      prix: '490.00 DH'
    },
    {
      id: 2,
      image: 'Tenu2.PNG',
      libelle: 'Maillot Domicile White',
      prix: '490.00 DH'
    },
    {
      id: 3,
      image: 'Tenu3PNG.PNG',
      libelle: 'Polo Raja club Black',
      prix: '300.00 DH'
    },
    {
      id: 4,
      image: 'Tenu4PNG.PNG',
      libelle: 'Polo Raja club Green',
      prix: '300.00 DH'
    },
    {
      id: 5,
      image: 'Tenu5PNG.PNG',
      libelle: 'Maillot Domicile Black',
      prix: '500.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    },

    {
      id: 7,
      image: 'Pull2PNG.PNG',
      libelle: 'Pull Gray Raja club',
      prix: '299.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    },
    {
      id: 1,
      image: 'Tenu1.PNG',
      libelle: 'Maillot Domicile Green',
      prix: '490.00 DH'
    },
    {
      id: 2,
      image: 'Tenu2.PNG',
      libelle: 'Maillot Domicile White',
      prix: '490.00 DH'
    },
    {
      id: 3,
      image: 'Tenu3PNG.PNG',
      libelle: 'Polo Raja club Black',
      prix: '300.00 DH'
    },
    {
      id: 4,
      image: 'Tenu4PNG.PNG',
      libelle: 'Polo Raja club Green',
      prix: '300.00 DH'
    },
    {
      id: 5,
      image: 'Tenu5PNG.PNG',
      libelle: 'Maillot Domicile Black',
      prix: '500.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    },

    {
      id: 7,
      image: 'Pull2PNG.PNG',
      libelle: 'Pull Gray Raja club',
      prix: '299.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    }, {
      id: 1,
      image: 'Tenu1.PNG',
      libelle: 'Maillot Domicile Green',
      prix: '490.00 DH'
    },
    {
      id: 2,
      image: 'Tenu2.PNG',
      libelle: 'Maillot Domicile White',
      prix: '490.00 DH'
    },
    {
      id: 3,
      image: 'Tenu3PNG.PNG',
      libelle: 'Polo Raja club Black',
      prix: '300.00 DH'
    },
    {
      id: 4,
      image: 'Tenu4PNG.PNG',
      libelle: 'Polo Raja club Green',
      prix: '300.00 DH'
    },
    {
      id: 5,
      image: 'Tenu5PNG.PNG',
      libelle: 'Maillot Domicile Black',
      prix: '500.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    },

    {
      id: 7,
      image: 'Pull2PNG.PNG',
      libelle: 'Pull Gray Raja club',
      prix: '299.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    },
    {
      id: 6,
      image: 'Pull1.PNG',
      libelle: 'Pull white Raja club',
      prix: '299.00 DH'
    }]

    return (
      <div className='container-fluid'>
        <Navbar />
        <ImageSlider />
        <ProductSlider items={prod} />
        <img src={require(`../images/cover.PNG`)} alt="" width="100%" height={'300vh'} />
        <h1 className='m-auto fw-bold text-center text-success '>EXPLORATION EXCLUSIVE</h1>
        <h6 className='m-auto text-center fw-lighter'>Les dernières tendances du Raja</h6>
        <div className="row justify-content-center mt-2">
          {products.map((product) => (
            <div className="col-md-3 col-sm-6 col-12 mb-3" key={product.id}>
              <div className="card p-2">
                <Link to={`/ProductsDetails/${product.id}`}>
                  <img
                    src={require(`../images/${product.image}`)}
                    alt="test"
                    className="img-fluid"
                    width={'100%'}
                  />
                </Link>
                <h4 className="card-title">{product.libelle}</h4>
                <h6>{product.prix}</h6>
                <button className="btn btn-success">Buy</button>
              </div>
            </div>
          ))}
        </div>
  
        <Decouvrir />
      </div>
    );
  };
  
  export default Products;