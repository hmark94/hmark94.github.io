import React, { useState, useEffect, useCallback } from 'react'
import { createUser } from '../services/crud';

export default function UserForm() {
    const [userData, setUserData] = useState();
    const [success, setSuccess] = useState(false);



    const submitHandler = (event) => {
        event.preventDefault();
        createUser(userData)
            .then(() => {
                setUserData({
                    email: '',
                    username: '',
                    name: '',
                    gender: '',
                    other: '',
                })
                setSuccess(true)
            })
    }

    //console.log('userData', userData)


    const changeHandler = useCallback((event) => setUserData(p => ({ ...p, [event.target.name]: event.target.value })), [])

    return <div>
        {success && <h2>Sikeres mentes</h2>}
        <form onSubmit={submitHandler}>
            <label htmlFor="name">
                Name:
                <input type="text" name="name" id="name" onChange={changeHandler} value={userData?.name || ''} />
            </label>
            <label htmlFor="email">
                Email:
                <input type="text" name="email" id="email" onChange={changeHandler} value={userData?.email} />
            </label>
            <label htmlFor="username">
                Username:
                <input type="text" name="username" id="username" onChange={changeHandler} value={userData?.username || ''} />
            </label>
            <label htmlFor="gender">
                <input type="radio" name="gender" value="male" onChange={changeHandler} checked={userData?.gender === "male"}/>Male
                <input type="radio" name="gender" value="female" onChange={changeHandler} checked={userData?.gender === "female"}/> Female
            </label>
            <label htmlFor="other">
                <textarea name="other" onChange={changeHandler} value={userData?.other || ''}></textarea>
            </label>
            <button type="submit" name="SAVE">Save</button>
        </form>
    </div>
}
