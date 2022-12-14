import React from "react";
import { Link } from "react-router-dom";

const Start = (props) => {
    const { newGame} = props
    return ( 
        <React.Fragment>
            <div>
                <div className="justify-content-center">
                   
                <Link to='game'><button className="btn btn-primary" onClick={()=>newGame()} >START</button></Link>
                </div>
                </div>
        </React.Fragment>
     );
}
 
export default Start;