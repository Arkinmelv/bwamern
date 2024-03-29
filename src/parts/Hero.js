import React from "react";
import Fade from  '@stahl.luke/react-reveal';

import imgFrame from "assets/images/img-frame.jpg";
import imgPicture from "assets/images/img-picture.jpg";
import iconCities from "assets/images/icons/ic_cities.svg";
import iconTraveler from "assets/images/icons/ic_traveler.svg";
import iconTreasure from "assets/images/icons/ic_treasure.svg";

import Button from "elements/Button";

import numberFormat from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <Fade bottom>
    <section className="container pt-4">
      <div className="row align-item-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 15 }}>
              <img
                width="36"
                height="36"
                src={iconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={iconTreasure}
                alt={`${props.data.treasures} Trasure`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">Trasure</span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={iconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <div style={{ width: 540, height: 410 }}>
            <img
              src={imgPicture}
              alt="Room With Couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={imgFrame}
              alt="Room With Couches Frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0p" }}
            />
          </div>
        </div>
      </div>
    </section>
    </Fade>
  );
}
