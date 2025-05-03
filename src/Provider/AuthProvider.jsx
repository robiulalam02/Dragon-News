import React, { useEffect, useState } from 'react';
import { ProviderContext } from './ProviderContext';
import { auth } from '../Firebase/firebase_config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [profile, setProfile] = useState(null)

    const registerUser = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setProfile(currentUser)
        });
        return () => unsubscribe;
    }, [])

    const signOutUser = () => {
        return signOut(auth);
    }

    const user = {
        registerUser,
        signInUser,
        signOutUser,
        profile
    }

    return (
        <ProviderContext value={user}>
            {children}
        </ProviderContext>
    );
};

export default AuthProvider;