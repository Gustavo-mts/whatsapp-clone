import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default  {
    fbPopup: async() => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result; 
    },
    addUser: async (u) => {
        await db.collection('user').doc(u.id).set({
            name: u.name,
            avatar: u.avatar
        }, {merge: true})
    }
}