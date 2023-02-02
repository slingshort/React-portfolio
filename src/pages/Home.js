import React from "react";
import profile from '../assets/profile-picture.jpg'

const Home = () => {
    return (
      <div className="flex-row space-evenly">
        <img className="profile-pic" src={profile} alt='profile-pic'/>
        <div className="card">
          <h1> Hey there! </h1>
          <p> 
            I am fresh graduate from the University of Sydney web development bootcamp. Im eager to launch my career in full-stack development and have a particularly keen interest for front-end development.
          </p>
          <p> Aside from currently continuing to develop my skills, I am also a professional classical musician. </p>
        </div>
      </div>
    );
  };
    
  export default Home;