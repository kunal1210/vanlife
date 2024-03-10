import React, { useEffect, useState } from "react";
const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElements = vans.map((van) => (
    <div className="list-item" key={van.id}>
      <div className="list_inner">
        <div className="item_img">
          <img src={van.imageUrl} />
        </div>
        <div className="item_info">
          <h3>{van.name}</h3>
          <p>
            {van.price}
            <span>/day</span>
          </p>
          <div className="typ_btn">
            <div className={`btn ${van.type} selected`}>{van.type}</div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="vans_list_wrp">
      <div className="container">
        <div className="item_list">{vansElements}</div>
      </div>
    </div>
  );
};

export default Vans;
