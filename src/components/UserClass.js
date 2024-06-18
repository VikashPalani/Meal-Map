import React from "react";

// Class based Component is a normal JS class
// Class based components are JS class that extends React.component and renders a piece of JSX code as return statement.
class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/VikashPalani");
        const json = await data.json();
        
        this.setState({
            userInfo: json
        })

        console.log(json);
    }
    render(){

        const{name,location,avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                <img className="about-img" src={avatar_url}></img>
               <h2>Name: {name}</h2>
               <h3>Location: {location}</h3>
               <h3>Contact: @_vikash17_</h3>
           </div>
       ); 
    }
}

export default UserClass;