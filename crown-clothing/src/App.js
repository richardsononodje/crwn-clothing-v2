
import { Routes, Route } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';


import Home from "./route/home/home.component";
import Navigation from './route/navigation/navigation.component';
import Authentication from './route/Authentication/Authentication.component';





const Shop =()=>{
  return (
    <div>
    <h1>
      this is the shop page
    </h1>
  </div>
  )
 
}


const App=()=> {


  return (
  
    // <Routes>
    //   <Route path='/' element ={<Home />}>
    //     <Route path='/Shop' element ={<Shop />} />
    //   </Route>
    // </Routes>
    <Routes>
      <Route path='/' element={<Navigation />} > 
        <Route index element ={<Home />} />
        <Route path='/Shop' element ={<Shop />} />
        <Route path ='/auth' element={<Authentication/>}/>
      </Route>
    </Routes>
   
  );
}

export default App;
