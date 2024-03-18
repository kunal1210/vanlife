import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, SetHostVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => SetHostVans(data.vans));
  }, []);
  const HostVansElements = hostVans.map((van) => (
    <div className="host_vans_item" key={van.id}>
      <Link to={`${van.id}`}>
        <div className="host_vna_inner">
          <div className="img">
            <img src={van.imageUrl} alt={van.name} className="" />
          </div>
          <div className="content">
            <h3>{van.name}</h3>
            <p>
              ${van.price}/<span>day</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="host_vans_list">
      <div className="container">
        <div className="host_inner">
          <h3>List of Host vans</h3>
          {HostVansElements}
        </div>
      </div>
    </div>
  );
};

export default HostVans;
