import "./style.css";


function ShoppingCartTotal({ items }) {
    
    const total = items.reduce((acc, item) => acc + item.price, 0);
  
    return (
      <div>
        <h2>Shopping Cart Total</h2>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    );
  }
  
  export default ShoppingCartTotal;