// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeNWAdoTUX7ujAd6Sizitx9EM_Jprt38I",
  authDomain: "chat-app-154e0.firebaseapp.com",
  projectId: "chat-app-154e0",
  storageBucket: "chat-app-154e0.appspot.com",
  messagingSenderId: "218146707995",
  appId: "1:218146707995:web:0f78b689a1874f856936be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Firestore'a kullanıcı bilgilerini ekle
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, I am using ChatApp!",
      lastSeen: Date.now(),
    });

    // Firestore'a chat bilgilerini ekle
    await setDoc(doc(db, "chats", user.uid), {
      chatsData: [],
    });

    toast.success("Kullanıcı oluşturuldu!");
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Giriş başarıyla yapıldı!");
  } catch (error) {
    console.error("Hata oluştu: ", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
    try {
        await signOut(auth)
        toast.success("Çıkış yapıldı!");
    } catch (error) {
        console.error("Hata oluştu: ", error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

export { signup, login, logout, auth, db };
