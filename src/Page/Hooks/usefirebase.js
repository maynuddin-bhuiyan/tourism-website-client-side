import initializeAutcntion from "../../Firebase/firebase.init";
import {useState} from "react";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

initializeAutcntion();



const useFirebase = () => {

    const [user,setUser] = useState({});
    const [error,setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
       return signInWithPopup(auth, googleProvider)
     

    };


return{
    user, setUser,
    error, setError,
    signInGoogle

    }

}

export default useFirebase;