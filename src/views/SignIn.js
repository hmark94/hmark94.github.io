import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'
import React, { useState } from 'react'


export default function SignInScreen() {
    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    })

    const changeHandler = (event) => setInputData(prev => ({ ...prev, [event.target.name]: event.target.value }))
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(inputData);
        signInWithEmailAndPassword(auth, inputData.email, inputData.password)
            .then((userCredential) => {
                console.log(userCredential.user)
            })
            .catch(e => console.error(e))
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                E-mail: <input type="email" name="email" onChange={changeHandler} /><br />
                Password: <input type="password" name="password" onChange={changeHandler} /><br />
                <button type="submit" >Sign In</button>
            </form>
        </>
    )

}
