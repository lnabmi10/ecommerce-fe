
import { Link } from 'react-router-dom';
import getAuthHeaders from '../../auth';
import React, { useEffect, useState } from 'react';

function AllShopProduct() {
    const [allproducts, setAllproducts] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/api/product/getallproducts', {
          method: 'GET',
          headers: getAuthHeaders(),
        });
        const data = await response.json();
        
        return data
        }

        useEffect(() => {
            const getProducts = async () => {
              try {
                const data = await fetchData();
                setAllproducts(data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            getProducts();

        
}, []);

    
console.log(allproducts)

  return (
    <>
     <div>
      <h1>Product List</h1>
      <ul>
      {allproducts.map((product) => ( <li key={product._id}>
        <hr/>
            title: {product.title  + "  ---- " },
             slug: {product.slug + "  ---- " },
             price: {product.price + "  ---- " },
             description: {product.description + "  ---- " },
             sold: {product.sold + "  ---- " },
             category: {product.category + "  ---- " }
             price: {product.price + "  ---- " }
             category: {product.category + "  ---- " }
             <Link to='/'> view the product  </Link>

             </li>))}
          
      </ul>
    </div>
    
        

    </>
  )
}

export default AllShopProduct