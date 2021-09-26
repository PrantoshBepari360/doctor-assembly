import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const {name, img, age, education, phone, salary} = props.doctor;

    return (
        <div className="col-md-4">
            <div className="details">
                <div>
                    <img src={img} alt="Doctor" />
                </div>
                <h3>Name: {name}</h3>
                <h4>Age: {age}</h4>
                <h4>Education: {education}</h4>
                <h4>Phone: {phone}</h4>
                <h4>Visit Fee: ${salary}</h4>
                <button 
                className="btn btn fs-4" 
                onClick={ () => props.handelEventCart(props.doctor)}>
                <i className="fas fa-cart-plus"></i> Add To Cart
                </button>
                <br />
                <div className="p-3 icon">
                    <a href="https://twitter.com/"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    <a href="https://slack.com/"><i className="fab fa-slack fa-2x"></i></a>
                    <a href="https://mail.google.com/"><i className="far fa-envelope fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Doctor;