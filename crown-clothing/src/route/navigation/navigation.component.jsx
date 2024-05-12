import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { auth, SignOutUser } from "../../utills/firebase/firebase";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.style.scss';




const Navigation =()=>{
  const {currentUser, setCurrentUser} = useContext(UserContext)
  

  const SignOutHandler = async()=>{
    const res = await SignOutUser(); 
   setCurrentUser(null);
   
  }
 
  return(
    <Fragment> 
     <div className="navigation">
         <Link className="logo-container" to='/'>
           <CrwnLogo className='logo' />
         </Link>
      
       <div className="nav-links-container">
         <Link className="nav-link" to='/Shop'>
           Shops
         </Link>

         {currentUser? (<span className="nav-link" onClick={SignOutHandler}> Sign out</span>): (<Link className="nav-link" to='/auth'>
         Sign in
       </Link>)  
         }

       </div>
     </div>
              
      <Outlet />
    </Fragment>
  )

}

export default Navigation;