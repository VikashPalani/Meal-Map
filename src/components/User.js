//Functional component for User component
//Functional COmponent is a piece of JS function that returns a JSX.

const User = ({name}) => {
    return(
         <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Chennai</h3>
            <h3>Contact: @_vikash17_</h3>
        </div>
    );
};

export default User;