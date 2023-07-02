import { initializeApp } from "firebase/app";
import "firebase/storage";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAZR_xXI0qJiElBvr0zE7aNq-I6IUUzcgM",
	authDomain: "edupath-dfcd4.firebaseapp.com",
	projectId: "edupath-dfcd4",
	storageBucket: "edupath-dfcd4.appspot.com",
	messagingSenderId: "667725875299",
	appId: "1:667725875299:web:6d44a990f1ba6d21279056",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
export { app, storageRef as default, storage };
