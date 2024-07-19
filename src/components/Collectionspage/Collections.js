import React, { useEffect, useState } from "react";
import '../../style/collections.css'

function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/Collections')
      .then(response => response.json())
      .then(data => setCollections(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Collections</h1>
      <div className="row collections-list">
        {collections.map(collection => (
          <div key={collection.id} className="col-12 col-md-4 collections-card">
            <div className="image-part">
              <img src={collection.image}  className="image-c" />
              <div className="name-part">
                <div>{collection.image_name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
