import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {newDoctors} = props;

    const totalReducer = (previusValue, currentValue) => parseFloat(previusValue) + parseFloat(currentValue.salary); 
    const total = newDoctors.reduce(totalReducer, 0);


    return (
        <div className="details">
            <h3><i className="far fa-user"></i> Add Doctors: {newDoctors.length}</h3>
            <h3>Total cost: ${total}</h3>
            <ul>
                {
                    newDoctors.map(doctor => <ul className="fs-4">
                        <li key={doctor.id}>{doctor.name}</li>
                    </ul>)
                }
            </ul>
        </div>
    );
};

export default Cart;