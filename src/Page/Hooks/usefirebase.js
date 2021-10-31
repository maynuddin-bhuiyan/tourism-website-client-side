import initializeAutcntion from "../../Firebase/firebase.init";
import { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

initializeAutcntion();



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setisLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Sign In Funtion
    const signInGoogle = () => {
        setisLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(resalt => {
                setUser(resalt.user)
            })
            .finally(() => setisLoading(false))


    };



    // log out  Funtion
    const logOut = () => {
        setisLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setisLoading(false))
    }

    // Observe User State Change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setisLoading(false);
        });

        return () => unsubscribed;


    }, [])


    return {
        isLoading,
        user,
        signInGoogle,
        logOut

    }

}

export default useFirebase;