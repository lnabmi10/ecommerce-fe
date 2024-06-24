const AddImage = () => {
    const handleImageUpload = (event) => {
      
    console.log(event.target.files[0]);
  };

  return (
    <div className="p-3 border rounded">
      <h4>Add Image</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Upload your image</label>
          <input className="form-control" type="file" id="formFile" onChange={handleImageUpload} />
        </div>
        <button type="submit" className="btn btn-warning">Submit</button>
      </form>
    </div>
  );
};

export default AddImage;