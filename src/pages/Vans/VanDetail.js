import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="details-container">
          <div className="container">
            <div className="back_btn">
              <Link to=".."
              relative="path"
              >
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z"
                    fill="#858585"
                  />
                </svg>
                Back To Vans
              </Link>
            </div>
            <div className="details">
              <div className="col5">
                <img src={van.imageUrl} />
              </div>
              <div className="col7">
                <div className="btn_wrap">
                  <div className="btn btn_small">{van.type}</div>
                </div>
                <h2>{van.name}</h2>
                <h3>
                  ${van.price}/<span>Day</span>
                </h3>
                <p>{van.description}</p>
                <div className="btn_wrap">
                  <Link to="../vans" className="btn">
                    Rent This van
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading.....</div>
      )}
    </div>
  );
}
