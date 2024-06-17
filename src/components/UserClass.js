import React from "react";

// Class based Component is a normal JS class
// Class based components are JS class that extends React.component and renders a piece of JSX code as return statement.
class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(props);
    }

    render(){

        const {name, location} = this.props;
        return(
            <div className="user-card">
               <h2>Name: {name}</h2>
               <h3>Location: {location}</h3>
               <h3>Contact: @_vikash17_</h3>
           </div>
       ); 
    }
}

export default UserClass;