import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './MyShopData.module.css';
import { Card, Button } from 'react-bootstrap';

function MyShopData() {
    const { shopId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [shopData, setShopData] = useState(null);
    const [editingField, setEditingField] = useState(null);
    const [newFieldValue, setNewFieldValue] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchShopData = async () => {
            try {
                const shopResponse = await fetch('http://localhost:3001/api/shop/getyourshop', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const result = await shopResponse.json();
                setShopData(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchShopData();
    }, [navigate]);

    const handleDeleteDescription = () => {
        setShopData((prevData) => {
            const newData = { ...prevData[0], description: '' };
            return [newData];
        });
        // Add API call to delete description from backend
    };

    const handleDeleteBrand = () => {
        setShopData((prevData) => {
            const newData = { ...prevData[0], brand: '' };
            return [newData];
        });
        // Add API call to delete brand from backend
    };

    const handleDeleteCategory = () => {
        setShopData((prevData) => {
            const newData = { ...prevData[0], category: '' };
            return [newData];
        });
        // Add API call to delete category from backend
    };

    const handleEdit = (field) => {
        setEditingField(field);
    };

    const handleSaveEdit = () => {
        if (newFieldValue !== '') {
            setShopData((prevData) => {
                const newData = { ...prevData[0], [editingField]: newFieldValue };
                return [newData];
            });
            // Add API call to update the field in the backend
            setEditingField(null);
            setNewFieldValue('');
        }
    };

    const handleAddPhoto = () => {
        setEditingField('photo');
    };

    const handleSavePhoto = () => {
        if (photoUrl !== '') {
            setShopData((prevData) => {
                const newData = { ...prevData[0], photo: photoUrl };
                return [newData];
            });
            // Add API call to add the photo to the backend
            setEditingField(null);
            setPhotoUrl('');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!shopData || shopData.length === 0) {
        return <div>No shop data available.</div>;
    }

    const { shopName, description, category, brand, photo } = shopData[0];

    return (
        <div className="container">
            <div className={styles.shopDataContainer}>
                <Card className={`${styles.shopCard} mb-3`}>
                    <Card.Body className={styles.shopCardBody}>
                        <Card.Header className={styles.shopCardHeader}>
                            <h2>{shopName}</h2>
                        </Card.Header>

                        {description && (
                            <div className={`${styles.infoRow} mb-2`}>
                                <div className={styles.infoTitle}>Description</div>
                                <div className={styles.infoContent}>
                                    {description}
                                    <div className={styles.infoButtons}>
                                        <Button variant="danger" className="me-2" onClick={handleDeleteDescription}>
                                            Delete Description
                                        </Button>
                                        <Button variant="warning" onClick={() => handleEdit('description')}>
                                            Edit Description
                                        </Button>
                                    </div>
                                    {editingField === 'description' && (
                                        <div className={styles.editInput}>
                                            <input
                                                type="text"
                                                value={newFieldValue}
                                                onChange={(e) => setNewFieldValue(e.target.value)}
                                            />
                                            <Button variant="success" onClick={handleSaveEdit}>
                                                Save
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {category && (
                            <div className={`${styles.infoRow} mb-2`}>
                                <div className={styles.infoTitle}>Category</div>
                                <div className={styles.infoContent}>
                                    {category}
                                    <div className={styles.infoButtons}>
                                        <Button variant="danger" className="me-2" onClick={handleDeleteCategory}>
                                            Delete Category
                                        </Button>
                                        <Button variant="warning" onClick={() => handleEdit('category')}>
                                            Edit Category
                                        </Button>
                                    </div>
                                    {editingField === 'category' && (
                                        <div className={styles.editInput}>
                                            <input
                                                type="text"
                                                value={newFieldValue}
                                                onChange={(e) => setNewFieldValue(e.target.value)}
                                            />
                                            <Button variant="success" onClick={handleSaveEdit}>
                                                Save
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {brand && (
                            <div className={`${styles.infoRow} mb-2`}>
                                <div className={styles.infoTitle}>Brand</div>
                                <div className={styles.infoContent}>
                                    {brand}
                                    <div className={styles.infoButtons}>
                                        <Button variant="danger" className="me-2" onClick={handleDeleteBrand}>
                                            Delete Brand
                                        </Button>
                                        <Button variant="warning" onClick={() => handleEdit('brand')}>
                                            Edit Brand
                                        </Button>
                                    </div>
                                    {editingField === 'brand' && (
                                        <div className={styles.editInput}>
                                            <input
                                                type="text"
                                                value={newFieldValue}
                                                onChange={(e) => setNewFieldValue(e.target.value)}
                                            />
                                            <Button variant="success" onClick={handleSaveEdit}>
                                                Save
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {photo && (
                            <div className={`${styles.infoRow} mb-2`}>
                                <div className={styles.infoTitle}>Photo</div>
                                <div className={styles.infoContent}>
                                    <img src={photo} alt="Shop" className={styles.shopPhoto} />
                                </div>
                            </div>
                        )}

                        <div className="d-flex justify-content-between mt-3">
                            <Button variant="primary" onClick={() => handleEdit('shop')}>
                                Edit Shop
                            </Button>
                            <Button variant="secondary" onClick={handleAddPhoto}>
                                Add Shop Photo
                            </Button>
                        </div>

                        {editingField === 'photo' && (
                            <div className={styles.editInput}>
                                <input
                                    type="text"
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                    placeholder="Enter photo URL"
                                />
                                <Button variant="success" onClick={handleSavePhoto}>
                                    Save Photo
                                </Button>
                            </div>
                        )}

                        <div className="mt-4">
                            <h3>Shop Members</h3>
                            <Button variant="primary" className="me-2">Add Member</Button>
                            <Button variant="danger">Delete Member</Button>
                        </div>

                        <div className="mt-4">
                            <h3>Shop Policies</h3>
                            <Button variant="primary" className="me-2">Propose Policy</Button>
                            <Button variant="danger">Delete Policy</Button>
                        </div>

                        <div className="mt-4">
                            <h3>Financial Information</h3>
                            <p>Sold: $1000</p>
                            <p>Money Withdrawn: $500</p>
                            <p>Money Remaining: $500</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default MyShopData;

