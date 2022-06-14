import React from 'react'
import Swal from 'sweetalert2';

function Header(props) {
    const { setisAdding, setEmployees } = props;
    const handleDelete = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete all!',
            cancelButtonText: 'No, cancel!',
        }).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: `All Employee's data has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
            });
            setEmployees([])
        })
    }
    return (
        <>
            <header>
                <h2>Employee Management System</h2>
                <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                    <button onClick={() => { setisAdding(true) }} className='round-button'>Add Employee</button>
                    <button onClick={handleDelete} className='round-button'>Delete All</button>
                </div>
            </header>
        </>
    )
}

export default Header