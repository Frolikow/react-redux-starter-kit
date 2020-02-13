import { autobind } from 'core-decorators';

import { User } from 'shared/types/models';

import app from "firebase/app";
import "firebase/firestore";

app.initializeApp({
  apiKey: "AIzaSyBXIr4pTDbrfJFIny_H1a5AiNxCCgt1-s4",
  authDomain: "frol-auth-5c0e9.firebaseapp.com",
  databaseURL: "https://frol-auth-5c0e9.firebaseio.com",
  projectId: "frol-auth-5c0e9",
  storageBucket: "frol-auth-5c0e9.appspot.com",
  messagingSenderId: "962457563760",
  appId: "1:962457563760:web:4665a41ef3705ca5f3fab5"
});

const db = app.firestore();

class Api {

  @autobind
  public async signUp(payload: User) {
    console.log('payload ', payload);
    let users: string[] = [];
    db.collection("test").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        users.push(doc.data()['email']);
      });
    });
    // console.log('users ', users);
    // db.collection("test").add({
    //   email: payload.email,
    //   password: payload.password,
    // })
    //   .then(function (docRef: any) {
    //     console.log("then...Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error: any) {
    //     console.error("catch...Error adding document: ", error);
    //   });
  }

  public async signIn() {
    // console.log('signIn')
    // console.log(FB);
  }

  public async passwordReset() {
    // console.log('passwordReset')
    // console.log(FB);
  }

}

export { Api };
