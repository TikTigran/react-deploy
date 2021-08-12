import React from "react";
import svg from "src/assets/svg/icon.svg";
// STYLES
import "./coming-soon.scss";

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="container">
        <h1 className="coming-soon__title">coming soon</h1>
        <div className="coming-soon__wrapper">
          <h2>We are launching soon please reload after minutes</h2>
          <p>
            We will come very quickly to offer you the best solution for your
            company.
          </p>
        </div>
        <div className="socials">
          <a
            href="https://www.facebook.com/"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg>
              <use xlinkHref={`${svg}#facebook`} />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg>
              <use xlinkHref={`${svg}#instagram`} />
            </svg>
          </a>
          <a
            href="https://twitter.com/"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg>
              <use xlinkHref={`${svg}#twitter`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
