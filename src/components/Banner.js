import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      {/* Add the background image */}
      <div className="banner-image" style={{ backgroundImage: "url('/images/flatirons_snow_jan_2017.png')" }}>
        {/* You can add additional content inside the banner if needed */}
      </div>
    </div>
  );
};

export default Banner;
