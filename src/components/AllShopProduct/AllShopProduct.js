import { Link,useParams } from 'react-router-dom';
import getAuthHeaders from '../../auth';
import React, { useEffect, useState  } from 'react';

function AllShopProduct() {
    const [allproducts, setAllproducts] = useState([]);
    const { shopId } = useParams();

    
    const fetchData = async () => {
        const response = await fetch(`http://localhost:3001/api/product/getallshopproducts/${shopId}`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                console.log("shopid from params allproduct",shopId)
                const data = await fetchData();
                setAllproducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/api/product/delete/${id}`, {
                method: 'DELETE',
                headers: getAuthHeaders(),
            });
            setAllproducts(allproducts.filter(product => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Product List</h1>
            <Link to={`/create-product/${shopId}`} className="btn btn-primary mb-4">Create New Product</Link>
            <div className="list-group">
                {allproducts.map((product) => (
                    <div key={product._id} className="list-group-item list-group-item-action">
                        <h5 className="mb-1">{product.title}</h5>
                        <p className="mb-1">Slug: {product.slug}</p>
                        <p className="mb-1">Price: {product.price}</p>
                        <p className="mb-1">Description: {product.description}</p>
                        <p className="mb-1">Sold: {product.sold}</p>
                        <p className="mb-1">Category: {product.category}</p>
                        <div className="d-flex justify-content-between">
                            <Link to={`/product/${product._id}`} className="btn btn-info btn-sm">View</Link>
                            <Link to={`/edit-product/${product._id}`} className="btn btn-warning btn-sm">Edit</Link>
                            <button onClick={() => handleDelete(product._id)} className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllShopProduct;
