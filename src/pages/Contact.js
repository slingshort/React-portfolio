
import React from "react";

const Contact = () => {
    return (
      <div className="center-content">
        <form className="px-2 flex-col">
          <h4> Feel free to contact me via the form below </h4>
          <label>Name</label>
          <input
            type='name'
            name='name'
            required
          />
          <label>Email</label>
          <input
            type='email'
            name='email'
            required
          />
          <label>Message</label>
          <input
            type='message'
            name='message'
            required
          />
        </form>
      </div>
    );
  };
    
  export default Contact;