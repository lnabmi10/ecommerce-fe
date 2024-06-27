import React, { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import getAuthHeaders from '../../auth';

function CreateProduct() {
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const { shopId } = useParams();
    const navigate = useNavigate();

console.log("shopid from params create product",shopId)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            brand,
            quantity,
            color,
            price,
            description,
            category,
        };

        try {
            const response = await fetch(`http://localhost:3001/api/product/createproduct/${shopId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...getAuthHeaders(),
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                navigate(`/allshopproduct/${shopId}`);
            } else {
                const data = await response.json();
                setError(data.message || 'Failed to create product');
            }
        } catch (error) {
            setError('Failed to create product');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Create New Product</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        id="brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="color" className="form-label">Color</label>
                    <input
                        type="text"
                        className="form-control"
                        id="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Product</button>
            </form>
        </div>
    );
}

export default CreateProduct;
