import React from "react";
import { Link } from "react-router-dom";
import image from '../images/logo-color.png'

const Start = (props) => {
  const { newGame } = props;
  return (
    <React.Fragment>
     
        <div className="justify-content-center mt-5"  style={{margin: 'auto', display: 'flex'}}>
        <div class="card" style={{width: '30rem', backgroundImage: `url(${image})`, backgroundSize: '30rem', backgroundRepeat: 'no-repeat'}}>
          <div className="card-body">
            <h5 className="card-title">Welcome to TrivYali</h5>
            <h6 className="card-subtitle mb-2 text-muted">By Yali Soltz</h6>
            <p class="card-text" style={{fontFamily: 'Ariel', fontSize: 18, textShadow: '1px 1px 2px black'}}>
            Welcome to TrivYali, the fun and challenging trivia game that you can play on your own! Whether you're looking to improve your knowledge, test your skills, or just have a good time, TrivYali has something for you. With a wide range of categories and difficult questions, you'll never get bored. So grab a pencil and paper, settle in, and get ready to put your brain to the test. Are you ready to become the ultimate trivia master? Let's get started!
            </p>
             <Link to="game">
            <button className="btn btn-primary" style={{marginTop: 115}} onClick={() => newGame()}>
              START
            </button>
          </Link>
          </div>
        </div>
         
        
      </div>
    </React.Fragment>
  );
};

export default Start;
