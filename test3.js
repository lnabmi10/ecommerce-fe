
function executeAfterDelay(callback, delay) {
    setTimeout(callback, delay);
  }
  const MyStore = () => {
    const [user, setUser] = useState(null);
    const [bankDetails, setBankDetails] = useState(null);
    const [store, setStore] = useState(null);
    const [identityCardUploaded, setIdentityCardUploaded] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }
    }, [navigate]);
  
    useEffect(() => {
      const fetchUserData = async () => {
        const token = localStorage.getItem('token');
        if (!token) return;
  
        try {
          const userResponse = await fetch('http://localhost:3001/api/user/connecterdUser', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const userData = await userResponse.json();
          setUser(userData);
          console.log("userData", userData);
          console.log("user", user);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserData();
    }, []);
  
    useEffect(() => {
      if (!user) return;
  
      const fetchBankDetails = async () => {
        const token = localStorage.getItem('token');
        try {
          const bankResponse = await fetch('http://localhost:3001/api/bankinfo/getbankdetails', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (bankResponse.ok) {
            const bankData = await bankResponse.json();
            setBankDetails(bankData);
            console.log("bankData", bankData);
          } else {
            navigate('/my-account');
          }
        } catch (error) {
          console.error('Error fetching bank details:', error);
        }
      };
  
      fetchBankDetails();
    }, [user]);
  
    useEffect(() => {
      if (!user) return;
  
      const fetchStoreDetails = async () => {
        const token = localStorage.getItem('token');
        try {
          const storeResponse = await fetch('http://localhost:3001/api/shop/getyourshop', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (storeResponse.ok) {
            const storeData = await storeResponse.json();
            setStore(storeData);
            console.log("storeData", storeData);
          }
        } catch (error) {
          console.error('Error fetching store details:', error);
        }
      };
  
      fetchStoreDetails();
    }, [user]);
  
    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('images', file);
  
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/api/seller/becomeseller', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });
  
        if (response.ok) {
          setIdentityCardUploaded(true);
          alert('Identity card uploaded successfully');
        } else {
          alert('Failed to upload identity card');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('An error occurred while uploading the identity card');
      }
    };
  
    const handleCreateStore = async (e) => {
      e.preventDefault();
      const { storeName, storeDescription, storeBrand, storeCategory } = e.target.elements;
  
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/api/shop/createshop', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: storeName.value,
            description: storeDescription.value,
            brand: storeBrand.value,
            category: storeCategory.value,
          }),
        });
  
        if (response.ok) {
          const storeData = await response.json();
          setStore(storeData);
          alert('Store created successfully');
        } else {
          alert('Failed to create store');
        }
      } catch (error) {
        console.error('Error creating store:', error);
        alert('An error occurred while creating the store');
      }
    };
  
    if (!user) {
      return <p>Loading...</p>;
    }
  
    executeAfterDelay(() => {
      console.log("bankDetails",bankDetails)
      if (!bankDetails) {
        navigate('/myStore');
        return null;
      }
  }, 2000);
    
  
    if (store) {
      return (
        <div>
          <h2>My Store</h2>
          <p>Name: {store.name}</p>
          <p>Description: {store.description}</p>
          <p>Brand: {store.brand}</p>
          <p>Category: {store.category}</p>
          {/* Add more store details here */}
        </div>
      );
    }
  
    return (
      <div>
        <h2>Become a Seller</h2>
        {identityCardUploaded ? (
          <form onSubmit={handleCreateStore}>
            <h3>Create Your Store</h3>
            <input type="text" name="storeName" placeholder="Store Name" required />
            <textarea name="storeDescription" placeholder="Store Description" required />
            <input type="text" name="storeBrand" placeholder="Store Brand" />
            <input type="text" name="storeCategory" placeholder="Store Category" />
            <button type="submit">Create Store</button>
          </form>
        ) : (
          <>
            <p>To become a seller, please upload your identity card.</p>
            <input type="file" />
            <button type='submit' onClick={handleFileUpload} >send</button>
          </>
        )}
      </div>
    );
  };
  
  export default MyStore;
  