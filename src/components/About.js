import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h2 className="font-normal text-xl p-4 m-4">This is the about page of Meal Map</h2>
            <br>
            </br>
            <h2><u className="font-semibold text-xl p-4 m-4">Owner</u></h2>
            <UserClass/>
        </div>
    )
}

export default About;