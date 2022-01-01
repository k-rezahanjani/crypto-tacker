import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import Decentralize from "./components/Decentralize";
import TradingPlatform from "./components/TradingPlatform";
import Rating from "./components/Rating";
import CreateCard from "./components/CreateCard";
import CardArray from "./CardArray";
import AboutUs from "./components/AboutUs";
import teamMembersArray from "./teamMembersArray";
import CreateMembers from "./components/CreateMembers";
import Footer from "./components/Footer";
import API from "./components/API";

function App() {
  return (
        <div className="App">
            <header className="App-header">
                <MyNavbar/>
                <Decentralize/>
            </header>
            <TradingPlatform/>
            <Rating/>
            <div className="container">
                <dl className="rating-cards">
                    {CardArray.map(CreateCard)}
                </dl>
            </div>
            <AboutUs/>
            <dl className='team-members'>
                {teamMembersArray.map(CreateMembers)}
            </dl>
            <API/>
            <Footer/>
        </div>
  );
}

export default App;
