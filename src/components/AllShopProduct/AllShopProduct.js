import React, { useState,useEffect } from 'react';
import {Link, useNavigate,useParams } from 'react-router-dom';
import getAuthHeaders from '../../auth';
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

function AllShopProduct() {
    const [allproducts, setAllproducts] = useState([]);
    const { shopId } = useParams();
    const navigate = useNavigate();
const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(true);
    
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
            await fetch(`http://localhost:3001/api/product/deleteproduct/${id}`, {
                method: 'DELETE',
                headers: getAuthHeaders(),
            });
            setAllproducts(allproducts.filter(product => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
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
                <Link className="nav-link" to={`/allshopproduct/${shopId}`}><BsCardList/> Listings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/messages/${shopId}`}> <BsChatSquareDots/> Messages</Link>
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
                              <Link className='text-dark' to={`/myshopdata/${shopId}`}> <strong>{shopData[0].shopName}.sijilmassa.com</strong> </Link>
                            </div>

                           </div>
                        <div className='codeforyourpage' >
                            <div className="container mt-5">
            <h1 className="mb-4">Product List</h1>
            <Link to={`/create-product/${shopId}`} className="btn btn-primary mb-4">Create New Product</Link>
            <div className="row">
            {allproducts.map((product) => (
                <div key={product._id} className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className={`card ${style.productCardStyle}`}>
                        <div className={style.productContainerImg}>
                            {product.images.length > 0 ? (
                                <img
                                    src={product.images[0].url}
                                    alt="Product"
                                    className={`${style.productImg1Style} card-img-top`}
                                />
                            ) : (
                                <img
                                    src="placeholder-image-url" // Add a placeholder image URL
                                    alt="Product"
                                    className={`${style.productImg1Style} card-img-top`}
                                />
                            )}
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Slug: {product.slug}</p>
                            <p className="card-text">Price: {product.price}</p>
                            <p className="card-text">Description: {product.description}</p>
                            <p className="card-text">Sold: {product.sold}</p>
                            <p className="card-text">Category: {product.category}</p>
                        </div>
                        <div className={`card-footer ${style.productActionBar} text-center`}>
                            <div className="btn-group">
                                <Link to={`/product/${product._id}`} className="btn btn-info btn-sm">View</Link>
                                <Link to={`/add-images/${product._id}`} className="btn btn-success btn-sm">Add Image</Link>
                                <Link to={`/edit-product/${product._id}`} className="btn btn-warning btn-sm">Edit</Link>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-danger btn-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
   
                          
                        </div>
                         </div>

      </div>

      </div>
    </>
         );
}

export default AllShopProduct;
