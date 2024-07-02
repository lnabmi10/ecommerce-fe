import React, { useState, useEffect } from 'react';
import AllProductCard from '../AllProductCard/AllProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchProducts();
  }, [sort, minPrice, maxPrice, page, limit]);

  const handleAddToCart = async (productId) => {
    try {
      const prodCart = { prodId: productId, count: 1, color: 'default' }; // Customize as needed
      const response = await fetch('http://localhost:3001/api/cart/addtocart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
           Authorization: `Bearer ${token}` 

        },
        body: JSON.stringify(prodCart),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      const result = await response.json();
      console.log('Added to cart:', result);
      // Update your state or notify the user here
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle the error (e.g., show a notification to the user)
    }
  };

    const handleAddToWishlist = async (productId) => {
        try {
            const response = await fetch('http://localhost:3001/api/product/addproducttowishlist', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                     Authorization: `Bearer ${token}` 
                },
                body: JSON.stringify({ prodId: productId }),
            });

            if (!response.ok) {
                throw new Error('Failed to add to wishlist');
            }

            const result = await response.json();
            console.log('Added to wishlist:', result);
            // Update your state or notify the user here
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            // Handle the error (e.g., show a notification to the user)
        }
    }
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const queryObj = {
        sort,
        limit,
        page,
        ...(minPrice && { price: { ...queryObj?.price, gte: minPrice } }),
        ...(maxPrice && { price: { ...queryObj?.price, lte: maxPrice } }),
      };

      const queryStr = new URLSearchParams(queryObj).toString();

      const response = await fetch(`http://localhost:3001/api/product/getallproducts?${queryStr}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePageChange = (direction) => {
    setPage((prevPage) => prevPage + direction);
  };

  const handlePriceFilter = () => {
    fetchProducts();
  };

  return (
    <div className="container">
      <h1 className="my-4">Product List</h1>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sort} onChange={handleSortChange} className="form-select">
            <option value="">Default</option>
            <option value="price">Price</option>
            <option value="-price">Price Descending</option>
            <option value="createdAt">Date Created</option>
            <option value="-createdAt">Date Created Descending</option>
          </select>
        </div>
        <div className="d-flex">
          <div className="me-2">
            <label htmlFor="minPrice">Min Price:</label>
            <input
              id="minPrice"
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="me-2">
            <label htmlFor="maxPrice">Max Price:</label>
            <input
              id="maxPrice"
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="align-self-end">
            <button
              onClick={handlePriceFilter}
              className="btn btn-primary"
            >
              Apply Price Filter
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="limit">Items per page:</label>
          <input
            id="limit"
            type="number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 col-sm-6 mb-4" key={product._id}>
                <AllProductCard 
                  productImg={product.images[0] ? product.images[0].url : ''} 
                  secondaryImg={product.images[1] ? product.images[1].url : ''} 
                  productBrand={product.brand} 
                  productTitle={product.title} 
                  productPrice={product.price} 
                  onAddToWishlist={handleAddToWishlist}
                  onAddToCart={handleAddToCart}
                  productId={product._id}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(-1)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;

