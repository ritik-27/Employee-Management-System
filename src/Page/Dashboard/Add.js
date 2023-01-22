import React, { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setisAdding }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);
    useEffect(() => {
        textInput.current.focus();
    }, [])


    const handleAdd = (e) => {
        e.preventDefault();

        // If All the fields are empty
        if (!firstName ||  !email || !salary ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: '* marked fields are required.',
                showConfirmButton: true
            });
        }

        //Creating New Employee here
        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setisAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 2000
        });
    }
    return (
        <div className='small-container'>
            <form onSubmit={handleAdd}>
                <h2>Add Employee</h2>

                {/* First Name */}
                <label htmlFor="firstName">First Name *</label>
                <input
                    id='firstName'
                    type="text"
                    value={firstName}
                    ref={textInput}
                    onChange={(e) => { setFirstName(e.target.value) }}
                />

                {/* Last Name */}
                <label htmlFor="lastName">Last Name</label>
                <input
                    id='lastName'
                    type="text"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}
                />

                {/* Email */}
                <label htmlFor="email">Email *</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                {/* Salary */}
                <label htmlFor="salary">Salary ($) *</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />

                {/* Date */}
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />

                {/* Add and Cancel Buttons */}
                <div>
                    <input type="submit" value="Add" />
                    <input type="button" value="Cancel" className='muted-button' style={{ marginLeft: '12px' }}
                        onClick={() => { setisAdding(false) }} />
                </div>
            </form>
        </div>
    )
}

export default Add
