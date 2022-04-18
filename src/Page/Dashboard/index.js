import React, { useState } from 'react'
import Header from './Header'
import List from './List'
import Add from './Add'
import Edit from './Edit'
import { employeesdata } from '../../data/index'

function Dashboard() {

    const [employees, setEmployees] = useState(employeesdata)
    const [isAdding, setisAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState(null)


    const handleEdit = () => {
        //TODO
    }

    const handledelete = () => {
        //TODO
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
                        handledelete={handledelete}
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