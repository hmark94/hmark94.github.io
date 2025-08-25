import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase';
import { readUser } from '../services/crud';
import Users from './Users';
import './users.css'

export default function UsersList() {
    const [usersList, setUsersList] = useState();

    useEffect(() => {
        readUser()
            .then(snapshot => {
                const users = snapshot.val();
                const usersList = [];
                for (let user in users) {
                    usersList.push(users[user])
                }
                //console.log(usersList);
                setUsersList(usersList);
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <div>
                {usersList && usersList.map((user, i) => <Users user={user} key={i} />)}
            </div>
        </div>
    )
}
