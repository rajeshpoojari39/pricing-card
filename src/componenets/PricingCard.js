import React from "react";

const PricingCard = ({ pricingDetails }) => {
  const {
    tier,
    price,
    user,
    storage,
    project,
    access,
    privateProject,
    support,
    domain,
    report,
  } = pricingDetails;

  return (
    <div className='col-lg-4'>
      <div className='card mb-5 mb-lg-0'>
        <div className='card-body'>
          <h5 className='card-title text-muted text-uppercase text-center'>
            {tier}
          </h5>
          <h6 className='card-price text-center'>
            ${price}
            <span className='period'>/month</span>
          </h6>
          <hr />
          <ul className='fa-ul'>
            {tier === "Free" ? (
              <li>
                <span className='fa-li'>
                  <i className='fas fa-check'></i>
                </span>
                {user}
              </li>
            ) : (
              <li>
                <span className='fa-li'>
                  <i className='fas fa-check'></i>
                </span>
                <strong>{user} Users</strong>
              </li>
            )}

            <li>
              <span className='fa-li'>
                <i className='fas fa-check'></i>
              </span>
              {storage} Storage
            </li>
            <li>
              <span className='fa-li'>
                <i className='fas fa-check'></i>
              </span>
              {project}
            </li>
            <li>
              <span className='fa-li'>
                <i className='fas fa-check'></i>
              </span>
              {access}
            </li>
            <li className={`${tier === "Free" && "text-muted"}`}>
              <span className='fa-li'>
                <i
                  className={`${
                    tier === "Free" ? "fas fa-times" : "fas fa-check"
                  }`}
                ></i>
              </span>
              {privateProject}
            </li>
            <li className={`${tier === "Free" && "text-muted"}`}>
              <span className='fa-li'>
                <i
                  className={`${
                    tier === "Free" ? "fas fa-times" : "fas fa-check"
                  }`}
                ></i>
              </span>
              {support}
            </li>
            {tier === "Free" || tier === "Plus" ? (
              <li className={`${tier === "Free" && "text-muted"}`}>
                <span className='fa-li'>
                  <i
                    className={`${
                      tier === "Free" ? "fas fa-times" : "fas fa-check"
                    }`}
                  ></i>
                </span>
                {domain}
              </li>
            ) : (
              <li className={`${tier === "Free" && "text-muted"}`}>
                <span className='fa-li'>
                  <i
                    className={`${
                      tier === "Free" ? "fas fa-times" : "fas fa-check"
                    }`}
                  ></i>
                </span>
                <strong>{domain}</strong> Free Subdomains
              </li>
            )}

            <li
              className={`${
                (tier === "Free" || tier === "Plus") && "text-muted"
              }`}
            >
              <span className='fa-li'>
                <i
                  className={`${
                    tier === "Free" || tier === "Plus"
                      ? "fas fa-times"
                      : "fas fa-check"
                  }`}
                ></i>
              </span>
              {report}
            </li>
          </ul>
          <div className='d-grid'>
            <button className='btn btn-primary btn-block text-uppercase'>
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
