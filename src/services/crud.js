import { database } from "../config/firebase";
import { ref, set, push, get, update, remove } from "firebase/database";
import { onChildAdded, onChildRemoved,  } from "firebase/database";


const endpoint = 'users'; // "tabla" v. "dokumentum nev" v "endpoint"

export function createUser(userData) {
    const refUser = ref(database, endpoint);
    const newRefUser = push(refUser);
    return set(newRefUser, userData)
}

export function readUser(key) {
    if (key) {
        const refUser = ref(database, `${endpoint}/${key}`);
        return get(refUser);
    }

    const refUser = ref(database, endpoint);
    return get(refUser)
}

export function updateUser(key, userData) {
    const refUser = ref(database, `${endpoint}/${key}`)
    return update(refUser, userData)
}

export function deleteUser(key) {
    const refUser = ref(database, `${endpoint}/${key}`)
    return remove(refUser)
}


