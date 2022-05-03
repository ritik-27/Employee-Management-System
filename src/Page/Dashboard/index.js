import React, { useState } from 'react'
import Header from './Header'
import List from './List'
import Add from './Add'
import Edit from './Edit'
import Swal from 'sweetalert2'

import { employeesData } from '../../data'

function Dashboard() {

    const [employees, setEmployees] = useState(employeesData)
    const [isAdding, setisAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState(null)


    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter((employee) => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 2000,
                });

                const newList = employees.filter((employee) => employee.id !== id)
                setEmployees(newList);
            }
        });
    }

    return (
        <div className="container">

            {/*Showing List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setisAdding={setisAdding}
                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}

            {/* Showing Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setisAdding={setisAdding}
                />
            )}

            {/* Showing Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                    selectedEmployee={selectedEmployee}
                />
            )}
        </div>
    )
}

export default Dashboard