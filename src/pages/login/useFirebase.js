import { Navigate } from 'react-router-dom';

import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import initializeFirebase from './firebase.init';

initializeFirebase()
const useFarebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    // const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    //sigin
    const loginInUser = (email, password, location, navigate) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const distination = location?.state?.from || '/'
                navigate(distination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }
    //loginUser 
    const signInuser = (email, password, name, location, navigate) => {
        setLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                //database

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                navigate('/')
            })
            .catch((error) => {
                setError(error.message)

            })
            .finally(() => setLoading(false))

    }
    //googleSignIn
    const googleLogin = (location, history) => {
        setLoading(true)

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                const distination = location?.state?.from || '/'
                history(distination)

                setError('')

            }).catch((error) => {
                setError(error.message)

            })
            .finally(() => setLoading(false))
    }

    //logOut
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate('/home')
            Navigate('/')
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false))
    }
    //state Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setUser({})
            }
            setLoading(false)

        });
        return () => unsubscribe
    }, [])


    const [singleuser, setSingleUser] = useState([])
    useEffect(() => {
        fetch(`https://still-plateau-84079.herokuapp.com/useremail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSingleUser(data)

            )
    }, [user?.email])



    if (singleuser.length === 0) {
        <h3 className='text-white display-3'>loading...</h3>
    }



    return {
        user,
        signInuser,
        loginInUser,
        logOut,
        loading,
        error,
        googleLogin,
        singleuser,
    }
};

export default useFarebase;