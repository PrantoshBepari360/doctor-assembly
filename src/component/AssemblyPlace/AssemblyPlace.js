import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor'

const AssemblyPlace = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect( () => {
        fetch('./doctor.JSON')
        .then(res => res.json())
        .then(doctors => setDoctors(doctors))
    }, [])

    const [newDoctors, setNewDoctors] = useState([]);
    
    const handelEventCart = (newDoctor) => {
        const newAddDoctor = [...newDoctors, newDoctor];
        setNewDoctors(newAddDoctor);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            doctors.map(doctor => <Doctor 
                                key={doctor.id}
                                doctor={doctor}
                                handelEventCart={handelEventCart}
                            />)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart 
                        newDoctors={newDoctors}
                    />
                </div>
            </div>
        </div>
    );
};

export default AssemblyPlace;