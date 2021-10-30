import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAutcntion = () => {
    initializeApp(firebaseConfig)
    
}


export default initializeAutcntion;