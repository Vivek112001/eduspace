import { auth, provider } from "../Lib/Firebase";
import AddClass from "./context";
import { useContext, useEffect, useState } from "react";

export function useLocalContext() {
    return useContext(AddClass)
}
export const CreateClassContext = (props) => {
    const [createClassDialog, setCreateClassDialog] = useState(false);
    const [JoinClassDialog, setJoinClassDialog] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loggedInMail, setLoggedInMail] = useState(null);
    
    const login = () => auth.signInWithPopup(provider);
    const logout = () => auth.signOut();
    
    const value = {
        createClassDialog,
        setCreateClassDialog,
        JoinClassDialog,
        setJoinClassDialog,
        login,
        logout,
        loggedInUser,
        setLoggedInUser,
        loggedInMail,
        setLoggedInMail
    }
 
     useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setLoggedInMail(authUser.email);
                setLoggedInUser(authUser);
            } else {
                setLoggedInMail(null);
                setLoggedInUser(null);
            }
        });
        return () => unsubscribe();
    }, []);
    return (
        <AddClass.Provider value={value}>
            {props.children}
        </AddClass.Provider>
    )
}
