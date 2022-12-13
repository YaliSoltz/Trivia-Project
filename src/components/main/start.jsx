import React from "react";
import { Link } from "react-router-dom";

const Start = (props) => {
    const {handleShowNavBar} = props
    return ( 
        <React.Fragment>
            <div>
                <div className="justify-content-center">
                   
                <Link to='game'><button className="btn btn-primary" onClick={()=>handleShowNavBar(true)} >START</button></Link>
                </div>
                </div>
        </React.Fragment>
     );
}
 
export default Start;