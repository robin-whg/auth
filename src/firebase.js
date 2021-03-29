import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjCBA88JhXkAJ_IXds-fl4AL01N5MbESY",
  authDomain: "auth-87f60.firebaseapp.com",
  databaseURL: "https://auth-87f60.firebaseio.com",
  projectId: "auth-87f60",
  storageBucket: "auth-87f60.appspot.com",
  messagingSenderId: "140444113176",
  appId: "1:140444113176:web:b8b0a9f4c8289debe9a66d",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

export const u = {
  user: '',
  get getUser() {
    return this.user
  },
  set setUser(x) {
    this.user = x
  }
}
