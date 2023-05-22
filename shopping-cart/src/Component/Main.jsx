 import "./style.css";


function ProductList(props) {
 
  return (
   <div className='top'>
   <div className='flex'>
    <div className='container'>    
     <div className='logo'>
       <img src={props.nike} alt='' /> 
       <img className='shirt' src={props.tshirt} alt=''/>
       <img src={props.bag} alt=''/> 
       </div>
       <div className='stl'>
       <h1>{props.title}</h1> 
       <p className='text'>{props.text}</p>
        <p className='size'>{props.size}</p>
       </div>
       <div>
       <p className='cost'>{props.cost}</p> 
       </div>
       <div>
       <div className='line'></div>
       </div>
       </div>
      </div>
      </div>
  
  );
}

export default ProductList;