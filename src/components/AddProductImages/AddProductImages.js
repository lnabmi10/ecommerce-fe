import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import getAuthHeaders from '../../auth';

const AddProductImages = () => {
    const token = localStorage.getItem('token');

    const { productId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [uploadStatus, setUploadStatus] = useState('');

    const onSubmit = async (data) => {
        const formData = new FormData();
        for (let i = 0; i < data.images.length; i++) {
            formData.append('images', data.images[i]);
        }

        try {
            const response = await fetch(`http://localhost:3001/api/product/upload/${productId}`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            });

            if (response.ok) {
                setUploadStatus('Images uploaded successfully!');
                reset();
            } else {
                setUploadStatus('Failed to upload images. Please try again.');
                console.error('Error uploading images:', await response.text());
            }
        } catch (error) {
            setUploadStatus('Failed to upload images. Please try again.');
            console.error('Error uploading images:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2>Add Images to Product</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="images">Upload Images</label>
                            <input
                                type="file"
                                className="form-control"
                                id="images"
                                {...register('images')}
                                multiple
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">Upload Images</button>
                        <Link to={`/product/${productId}`} className="btn btn-secondary">Cancel</Link>
                    </form>
                    {uploadStatus && (
                        <div className={`alert mt-3 ${uploadStatus.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                            {uploadStatus}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddProductImages;
