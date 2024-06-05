import React from "react";
import ReactDOM from "react-dom/client"; 

const Header = () => {
    return(
        <div className = "header">
            <div className="logo-container">
                <img 
                    className = "logo"
                    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlAzLqX93b4VNZYPBQY9WTOqWGctf7aGlJg&s"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

//We are building a seperate component for Restaurant Cards to make it modular (reusing it whenever required)
const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img 
                className = "res-logo" 
                src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0vvulfbahjxjz6k4uwi">
            </img>
            <h3>Meghana Foods</h3>
            <h4>Briyani, North Indian</h4>
            <h4>4.5 stars</h4>
            <h4>40 minutes</h4> 
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
};


const AppLayout = () => {
    return(
        <div className = "app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);