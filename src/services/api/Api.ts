import app from "firebase/app";
import "firebase/firestore";

import { User } from 'shared/types/models';

type StringObject = {
  [key: string]: string;
}

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
  public async signUp(payload: User, userList: string[]) {
    if (userList.some(user => user === payload.email)) {
      throw 'Вы уже зарегистрированы!';
    } else {
      db.collection("users").doc(payload.email).set({
        password: payload.password,
      });
    }
  }

  public async getUsers() {
    let users: StringObject = {}
    await db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        users[doc.id] = doc.data()['password']
      });
    });
    return users;
  }

  public async signIn(payload: User, users: StringObject) {
    if (Object.keys(users).indexOf(payload.email) !== -1) {
      if (users[payload.email] === payload.password) {
        console.log('success signIn ', payload);
      } else {
        throw 'Неверный пароль';
      }
    } else {
      throw 'Пользователь не найден';
    }
  }

  public async passwordReset(payload: string, users: StringObject) {
    if (Object.keys(users).indexOf(payload) !== -1) {
      const newPass = users[payload].split('').reverse().join('')

      await db.collection("users").doc(payload).set({
        password: newPass,
      })
      return newPass;
    } else {
      throw 'Пользователь не найден';
    }
  }
}

export { Api };
