import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from '../../context/Cart/CartContext';
import { useContext } from 'react';

function AddToCart() {
    const {incrementCartCount } = useContext(CartContext)
  return (
    <div>
        <button className='border border-0 p-2'>
        {/* <AddShoppingCartIcon /> */}
        <button onClick={()=>incrementCartCount()}  >add to cart</button>

        </button>

      
    </div>
  )
}

export default AddToCart
