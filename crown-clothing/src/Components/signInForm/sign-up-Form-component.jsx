import { useState, useContext } from "react";
import {authCreateUserWithEmailAndPassword,
        creatUserFromAuth} 
        from '../../utills/firebase/firebase';
import { UserContext } from "../../context/user.context";
import FormInput from "../form-input/form-input-component";
import './sign-up-form.styles.scss';


const SignUpForm =()=>{

  const formFieldData = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''

  }

  const {setCurrentUser} = useContext(UserContext);

  const [ formField, setFormField ] = useState(formFieldData);

  const { displayName, email, password, confirmPassword } = formField;

  
  console.log (formField)

  const resetFormField = ()=>{
    setFormField (formFieldData)
  }


  const submitForm = async (event)=>{
    event.preventDefault();

    if (password !== confirmPassword) {
      alert ('password do not match')
      return;
    }

    try {

      // if (displayName.exists()){
      //   alert('this name already exist')
      // };

      const {user} = await authCreateUserWithEmailAndPassword(email, password);
      const userDocRef = await creatUserFromAuth(user, {displayName})

      setCurrentUser(user);

      alert('register');
      resetFormField();  

    }

    catch(error){

      if(error.code === 'auth/email-already-in-use') {
        alert ('emails already in use, kindly try using another email address')
      }
      console.log('eror',error);
    }
         
    
  };






  const onChangeHandler = (event)=>{
    const {name, value} = event.target;

    setFormField ({...formField, [name]:value});
   
  }

  return(
    <div className="sign-up-container">


      <h1>sign up form</h1>
      <span>Enter your details <span className="sign-up-form"> here..</span></span>
      <form onSubmit = {submitForm}>


        <FormInput
         label= "userName"
         type="text" 
         required 
         name = 'displayName' 
         onChange={onChangeHandler} 
         value={displayName}
        />

       

        <FormInput
        label= "email"
        type="email" 
        required 
        name = 'email' 
        onChange={onChangeHandler} 
        value = {email}
        />

        <FormInput
        label= "password"
        type="password" 
        required 
        name = 'password' 
        onChange={onChangeHandler} 
        value = {password}
        />

        <FormInput
        label=  "confirm password"
        type="password" 
        required 
        name = 'confirmPassword' 
        onChange={onChangeHandler} 
        value = {confirmPassword}
        />

        <button className="btn-dark tick" type="onClick">submit</button>

       
      </form>
    </div>
  )
}

export default SignUpForm;