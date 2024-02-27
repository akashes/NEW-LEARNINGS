// import  { createContext, useState } from "react";

// export const CartContext=createContext()

// export const Cart=({children})=>{
//     const [counter,setCounter]=useState(0)

//     const incrementCounter=()=>{
//         setCounter((counter)=>counter+1)
//     }
//     return (
//         <CartContext.Provider value={{counter,incrementCounter}}>
//             {children}

//         </CartContext.Provider>
//     )

// }
// export default Cart

import { createContext, useState } from "react";

export const CartContext = createContext()

const Cart=({children})=>{
    const[cartCount,setCartCount]=useState(0)
    const incrementCartCount=()=>{
        setCartCount(prev=>prev+1)
    }

    return <CartContext.Provider value={{cartCount,incrementCartCount}}>
        {children}

    </CartContext.Provider>

}

export default Cart