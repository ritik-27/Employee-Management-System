import React from 'react'

function Header(props) {
    const { setisAdding } = props;
    return (
        <>
            <header>
                <h2>Employee Management System</h2>
                <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                    <button onClick={() => { setisAdding(true) }} className='round-button'>Add Employee</button>
                </div>
            </header>
        </>
    )
}

export default Header