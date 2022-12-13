import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const HotCollections = () => {

  const [cardData,setCardData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections'
        );
        setCardData(response.data);
        console.log(response.data);
    }
    fetchData();
  }, [])
  
   
 //'https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections'
  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {new Array(cardData.length).fill(cardData).map((card,i) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={i}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={card.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={card.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link  to="/explore">
                    <h4>Pinky Ocean</h4>
                  </Link>
                  <span>ERC-192</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
