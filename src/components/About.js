import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h2>This is the about page of Meal Map</h2>
            <br>
            </br>
            <h2><u>Owner</u></h2>
            <User name={"Vikash P from Function"} location={"Chennai"}/>
            {/* <UserClass name={"Vikash P from Class"} location={"Chennai"}/> */}
        </div>
    )
}

export default About;