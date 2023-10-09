import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


import app from '../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = (  {children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                 // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
                 useNavigate(from, {replace:true});
                setUser(null);
               
            })
            .catch(error => console.log(error))
          
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }

    }, [auth])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        handleGoogleSignIn,
        handleSignOut

    }


    return (
        <div>
             <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;