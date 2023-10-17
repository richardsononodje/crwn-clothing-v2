import CategoryPage from '../Categories/categories-component';
import './directory.style.scss';


const Directory = ({categories})=>{
    //  const categories = sort;
 
  return(

    <div className='categories-container'>
      {categories.map((category)=>{
        return(
          <CategoryPage key ={category.id} category= {category}/>

        )
      })}
    </div>

   
  )

}

export default Directory;