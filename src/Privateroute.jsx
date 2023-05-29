import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./firebase/FirebaseConfig";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const [isLogin,setIsLogin] = useState(true);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=> {
            if(user){
                setIsLogin(true)
            }else{
                setIsLogin(false)
            }
        })
       },[isLogin])

   

    if(isLogin){
        return children;
    }else{
        return <Navigate to="/login" />
    }

}

export default PrivateRoute;