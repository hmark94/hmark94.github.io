import './App.css';
import { useEffect } from 'react';
import { createUser, readUser, updateUser, deleteUser } from './services/crud'
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import SignUpScreen from './views/SignUp';
import SignInScreen from './views/SignIn';
import { auth } from './config/firebase'


function App() {

  useEffect(() => {
    const user = auth.currentUser
    console.log(user)
    if (user) {
      console.log('Be van lépve')
    } else {
      console.log('nincs belépve')
    }
  }, [])

//delete
/* useEffect(() => {
  deleteUser('-MzpO_KiWyPkCmTaQj8X', {
    username: 'csoki',
  })
    .then(snapshot => console.log('sikerült a törlés'))
    .catch(e => console.log(e))
}, []) */


  //update
/*   useEffect(() => {
    updateUser('-MzpO_KiWyPkCmTaQj8X', {
      username: 'csoki',
      // username: null (törli a key-t)
    })
      .then(snapshot => console.log(snapshot.val()))
      .catch(e => console.log(e))
  }, []) */

  
  /*   useEffect(() => {
    readUser('-MzpO_KiWyPkCmTaQj8X')
    .then(snapshot => console.log(snapshot.val()))
    .catch(e => console.log(e))
  }, []) */
  
  //create
  /* useEffect(() => {
    createUser({
      email: 'valami@gmail.com',
      username: 'hellobello_23',
      name: 'Mr. Jolan',
      gender: 'male',
      other: 'Lorem Ipsum'
    })
    .then(response => console.log(response))
    .catch(e => console.log(e)) 
  }, []) */
  
  //read
/*    useEffect(() => {
    readUser()
      .then(snapshot => console.log(snapshot.val()))
      .catch(e => console.log(e))
  }, []) */

  return (
    <div className="App">
      {/* <UserForm />
      <UsersList /> */}
      <SignUpScreen />
      <SignInScreen />
    </div>
  );
}

export default App;
