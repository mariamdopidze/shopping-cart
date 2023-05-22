import Header from "./Component/Header";

import Main from "./Component/Main";
import './App.css';
import Bag from "./images/bag.png";
import Tshirt from "./images/tshirt.png" ;
import Nike from "./images/nike.png" ;






function App( ) {



  return (
    <>
       <Header btn="btn"/>
       
      
      <Main   nike={Nike} title='Nike' text="Superstar"size='8.5'cost='$239,55' />
      <Main tshirt={Tshirt} title='H&M' text="T-Shirt" size='s'cost='$14,99' />
      <Main  bag={Bag} title='Gucci'text="CG Marmont" cost='$1850,00'/>

     
     

    </>
  );
}

export default App;