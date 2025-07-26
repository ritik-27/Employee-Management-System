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
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `All Employee's data has been deleted.`,
                    showConfirmButton: false,
                    timer: 2000,
                });
                setEmployees([]);
            }
        });
    }
    return (
        <>
            <header>
                <h2>WorkForce Hub</h2>
                <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                    <button style={{ marginRight: '5px' }} onClick={() => { setisAdding(true) }} className='button'>Add Employee</button>
                    <button onClick={handleDelete} className='accent-button'>Delete All</button>
                </div>
            </header>
        </>
    )
}

export default Header
