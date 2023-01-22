import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit(props) {
    const { employees, setEmployees, setIsEditing, selectedEmployee } = props;

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);


    const handleUpdate = (e) => {
        e.preventDefault();

        // If All the fields are empty
        if (!firstName || !email || !salary ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: '* marked fields are required.',
                showConfirmButton: true
            });
        }

        //Editing Employee here
        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };

        //Kichhhkattt
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }
        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 2000
        });

    }
    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h2>Edit Employee</h2>

                {/* First Name */}
                <label htmlFor="firstName">First Name *</label>
                <input
                    id='firstName'
                    type="text"
                    value={firstName}
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
                    <input type="submit" value="Update" />
                    <input type="button" value="Cancel" className='muted-button' style={{ marginLeft: '12px' }}
                        onClick={() => { setIsEditing(false) }} />
                </div>

            </form>
        </div>
    )
}

export default Edit
