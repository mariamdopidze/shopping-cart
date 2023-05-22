import React, { useState } from 'react';
import ShoppingBag from '../images/shopping.png';

function Component() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };
 

  return (
    <div className='top'>
      <div className='flex'>
        <div className='container'>
          <div>
            <h1 className='shopping'>Shopping cart</h1>
          </div>
          <div>
            <img className='bag' src={ShoppingBag} alt='' />
          </div>
          <div className='add'>
            <p>3 Items</p>
          </div>
          <button className='click'>{count}</button>
        </div>
        <div className='increment'>
            <button className='first' onClick={handleButtonClick}>Add cart</button>
            <button className='second' onClick={handleButtonClick}>Add cart</button>
            <button className='third' onClick={handleButtonClick}>Add cart</button>
          </div>
      </div>
    </div>

  );
}

export default Component;