import React, { useEffect, useState } from "react";
import '../../style/collections.css'
import Centerrpage from "../Shoppage/Centerrpage";
import Centerrpage4 from "../Home/Centerrpage4";
import Centerrpage6 from "../Home/Centerrpage6";
import Centerrpage3 from "../Home/Centerrpage3";

function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/Collections')
      .then(response => response.json())
      .then(data => setCollections(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Centerrpage />
      <div className="container">
        <h1>Collections</h1>
        <div className="row collections-list">
          {collections.map(collection => (
            <div key={collection.id} className="col-12 col-md-6 col-lg-3 collections-card">
              <div className="image-part">
                <img src={collection.image} className="image-c" />
                <div className="name-part">
                  <div className="image_name">{collection.image_name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Centerrpage4 />
      <Centerrpage6 />
      <Centerrpage3 />
    </>
  );
}

export default Collections;
