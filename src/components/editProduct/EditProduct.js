import { Link,useParams,useNavigate } from 'react-router-dom';
import getAuthHeaders from '../../auth';
import React, { useEffect, useState  } from 'react';
import style from '../../pages/MyStore/MyStore.module.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import ReactStars from "react-rating-stars-component";
import Button  from '../../components/Button/Button';
import minibrahinImg from '../../images/images/miniBrahim.png'
import { BsChatSquareDots } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsMegaphone } from "react-icons/bs";


const EditProduct = () => {
     const token = localStorage.getItem('token');
     const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({
        id : productId,
        title: '',
        description: '',
        price: '',
        category: '',
        brand: '',
        quantity: '',
        sold: '',
        color: ''
    });

    const [error, setError] = useState('');
    const [shopData, setShopData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetch the existing product details
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/product/getoneproduct/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/api/product/updateproduct/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(product)
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            const data = await response.json();
            console.log('Product updated successfully:', data);
            navigate(`/allshopproduct/${data.shop}`);
        } catch (error) {
            setError(error.message);
        }
    };
 
  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchShopData = async () => {
      try {
        const shopResponse = await fetch('http://localhost:3001/api/shop/getyourshop', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await shopResponse.json();
        setShopData(result);
      } catch (error) {
        console.error(error);
      
      }  finally {
        setLoading(false); 
      }
    }
    fetchShopData()
}, [navigate])
 const ratingChanged = (newRating) => {
    console.log(newRating);
    };
    if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }
  let thShopImg ; 
  if(shopData[0].images.length>1)
  {
    const imgesArray = shopData[0].images
    thShopImg = imgesArray[imgesArray.length - 1].url;

    }

    return (
        <>
    <div className='container'>
      <div className='row'>
        <div className='col-2 '> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to={'/Mystore'}><BsFillHouseDoorFill/> Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/allshopproduct/${shopData.id}`}><BsCardList/> Listings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/messages/${shopData.id}`}> <BsChatSquareDots/> Messages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " href="#" > <BsFileText/> Orders & Shipping</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><BsStar/> Star Seller</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsBarChart/> Stats</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" ><BsMegaphone/> Marketing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsBank/> Finances</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsQuestionCircle/> Help</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsFillGearFill/> Settings</Link>
              </li>
              
             
              
               </ul>
             </div>
           </div>
         </nav>

        
        </div>
        <div className='col-10'>
              <div className='row py-4'>
                            <div className='col-2'>
                                <img src={thShopImg} className={style.shopImg} alt='' />

                            </div>
                            <div className='col-4'>
                         <div className='container shop-name'> <h2>{shopData[0].shopName}</h2> </div>
                          <div> <p> {shopData[0].description }</p>  </div>
                                <div> 17 sales | 55 active listings </div>
                                <div> <ReactStars
                                          count={5}
                                          onChange={ratingChanged}
                                          size={24}
                                          activeColor="#ffd700"
                                          value={4.5}
                                          edit={false}
                                        />
                                </div>
                                

                            </div>
                            <div className='col-4'></div>
                            <div className='col-2'>
                              <Link className='text-dark' to={`/myshopdata/${shopData[0]._id}`}> <strong>{shopData[0].shopName}.sijilmassa.com</strong> </Link>
                            </div>

                           </div>
                        <div className='codeforyourpage' >
                            <div className="container mt-4">
            <h2>Edit Product</h2>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded border">
                <div className="form-group mb-3">
                    <label>Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={product.title} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Description:</label>
                    <textarea 
                        name="description" 
                        value={product.description} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={product.price} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Category:</label>
                    <input 
                        type="text" 
                        name="category" 
                        value={product.category} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Brand:</label>
                    <input 
                        type="text" 
                        name="brand" 
                        value={product.brand} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Quantity:</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        value={product.quantity} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Sold:</label>
                    <input 
                        type="number" 
                        name="sold" 
                        value={product.sold} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Color:</label>
                    <input 
                        type="text" 
                        name="color" 
                        value={product.color} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
                <button type="submit" className="btn btn-warning">Update Product</button>
            </form>
        </div>
                          
                        </div>
                         </div>

      </div>

      </div>
    </>
        
    );
};

export default EditProduct;
