import React, { useEffect } from 'react'
import { deleteUser } from '../services/crud';
import './users.css'


export default function Users({ user }) {

    const deleteHandle = () => {
        deleteUser()
    }
    const editHandle = () => {

    }
    const readHandle = (e) => {

    }

    return (
        <div>
            <table id='users_table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Gender</th>
                        <th>Other</th>
                        <th colSpan="3"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.gender}</td>
                        <td>{user.other}</td>
                        <td><button onClick={deleteHandle}>Delete</button></td>
                        <td><button onClick={editHandle}>Edit</button></td>
                        <td><button onClick={readHandle}>Read</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
