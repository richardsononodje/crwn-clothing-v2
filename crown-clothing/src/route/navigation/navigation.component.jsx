import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.style.scss';



const Navigation =()=>{
  return(
    <Fragment> 
     <div className="navigation">
         <Link className="logo-container" to='/'>
           <CrwnLogo className='logo' />
         </Link>
      
       <div className="nav-links-container">
         <Link className="nav-link" to='/Shop'>
           Shop
         </Link>

         <Link className="nav-link" to='/auth'>
           Sign in
         </Link>
       </div>
     </div>
              
      <Outlet />
    </Fragment>
  )

}

export default Navigation;