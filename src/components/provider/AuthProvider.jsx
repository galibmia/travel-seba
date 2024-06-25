import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, [auth, setUser, setLoading]);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuth);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }

    

    const toastError = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const toastSuccess = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    const authInfo = {
        user,
        loading,
        createUser,
        loginWithEmail,
        updateUser,
        loginWithGoogle,
        logOut,
        toastError,
        toastSuccess,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;