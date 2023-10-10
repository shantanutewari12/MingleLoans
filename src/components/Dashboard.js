import React, { useState, useEffect } from 'react';
import './Dashboard.css'
function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [showNoData, setShowNoData] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load users from local storage
    const loadUsersFromLocalStorage = () => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(storedUsers);
      setFilteredUsers(storedUsers);
    };

    loadUsersFromLocalStorage();
  }, []);

  // Save users to local storage
  const saveUsersToLocalStorage = (userList) => {
    localStorage.setItem('users', JSON.stringify(userList));
  };

  useEffect(() => {
    const filtered = users.filter((user) => {
      const { name, email, phone } = user;
      return (
        name.toLowerCase().includes(filter.toLowerCase()) ||
        email.toLowerCase().includes(filter.toLowerCase()) ||
        phone.includes(filter)
      );
    });

    const sortedUsers = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredUsers(sortedUsers);
  }, [filter, sortOrder, users]);

  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
  };

  const handleEditUser = (editedUserData) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUserData.id ? editedUserData : user
    );
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    setIsEditMode(false);
  };

  const handleDeleteUser = (userToDelete) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
      setUsers(updatedUsers);
      saveUsersToLocalStorage(updatedUsers);
    }
  };

  const handleReload = () => {
    // Reload data from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
    setFilteredUsers(storedUsers);
    setFilter('');
    setSortOrder('asc');
    setIsEditMode(false);
    setEditedUser(null);
    setShowNoData(false);
  };

  const handleChooseFromGallery = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Allow only image files
    fileInput.style.display = 'none';
  
    // Trigger a click event on the file input element
    fileInput.click();
  
    // Handle the selected file
    fileInput.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];
  
      if (selectedFile) {
        // Create a URL for the selected file and set it as the selectedImage
        const selectedImageUrl = URL.createObjectURL(selectedFile);
        setSelectedImage(selectedImageUrl);
      }
    });
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={handleReload}>Reload</button>
      <input
        type="text"
        placeholder="Search by Name, Email, or Phone"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className='btn' onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
      </button>
      <button className='btn' onClick={() => setIsEditMode(true)}>Add User</button>
      <div className='user'><h4>Users</h4></div>
      {isEditMode && (
               <div>
               <h3>Add User</h3>
               <form
                 onSubmit={(e) => {
                   e.preventDefault();
                   
                   const newUser = {
                     id: users.length + 1,
                     name: editedUser.name,
                     email: editedUser.email,
                     phone: editedUser.phone,
                   };
                   handleAddUser(newUser);
                   setIsEditMode(false);
                 }}
               >
                 <input
                   type="text"
                   placeholder="Name"
                   value={editedUser?.name || ''}
                   onChange={(e) =>
                    setEditedUser({ ...editedUser, name: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editedUser?.email || ''}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={editedUser?.phone || ''}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, phone: e.target.value })
                  }
                  required
                />
                <button className='btn' type="submit">Save</button>
                <button className='btn' onClick={() => setIsEditMode(false)}>Cancel</button>
                
                </form>
        </div>
      )}
      {showNoData ? (
        <p>No Data Found</p>
      ) : (
        <ul>
          {filteredUsers.length === 0 ? (
            <p>No users found.</p>
          ) : (
            filteredUsers.map((user) => (
              <li key={user.id}>
                <div>
                  <strong>Name:</strong> {user.name}
                </div>
                <div>
                  <strong>Email:</strong> {user.email}
                </div>
                <div>
                  <strong>Phone:</strong> {user.phone}
                </div>
                <button className='btn' onClick={(_handleEditUser) => setIsEditMode(true)}>Edit</button>
                <button className='btn' onClick={() => handleDeleteUser(user)}>Delete</button>
                <button className='btn' onClick={handleChooseFromGallery}>Choose photo</button>
              </li>
            ))
          )}
        </ul>
      )}
      {selectedImage && (
        <div>
          <h2>Selected Image</h2>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
