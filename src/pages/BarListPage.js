import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BarItem from "../componenets/BarItem";
import "./BarListPage.css";
import Header from "../componenets/Header";
import MapComp from "../componenets/MapComp";
import Footer from "../componenets/Footer";
import FilterBar from "../componenets/FilterBar";

const BarListPage = ({ bars, setBars }) => {
  useEffect(() => {
    getBars();
  }, []);

  let getBars = async () => {
    let response = await fetch(
      "https://bpttoms-up-backend.onrender.com/api/bars"
    );
    let data = await response.json();
    setBars(data);
  };

  return (
    <div>
      <Header />
      <div className="main-list">
        <div div id="bars-list">
          <div id="list-label">Some Local Baltimore Bars</div>
          {bars.map((bar, index) => (
            <div key={index} className="bar-item">
              <ul class="collection">
                <BarItem bar={bar} />
              </ul>
            </div>
          ))}
        </div>
        <div className="map-div">
          <MapComp bars={bars}></MapComp>
          <span className="add-text">
            <br />
            Want to add a bar that's not here yet?
            <Link to={`/bars/create`}>
              <a class="btn-floating btn-medium waves-effect waves-light blue z-depth-5 add-button">
                <i class="material-icons">add</i>
              </a>
            </Link>
          </span>
        </div>
       <FilterBar/>

      </div>

      <Footer />
    </div>
  );
};

export default BarListPage;
