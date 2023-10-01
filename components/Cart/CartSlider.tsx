"use client"
import { useState } from 'react';
import CartSliderItem from './CartSliderItem';

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartSliderProps = {
  product: Product[];
  isSidebarOpen: boolean;
  setIsSidebarOpen: (e: boolean) => void;
  handleSidebarToggle: () => void;
};

const CartSlider: React.FC<CartSliderProps> = ({ product, isSidebarOpen, setIsSidebarOpen, handleSidebarToggle }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [cart, setCart] = useState([{
    name: '',
    price: 0
  }]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = (data: Product) => {
    setIsAdding(true);
    setTimeout(() => {
      // Add logic to add the product to the cart
      // console.log('Adding to cart:', product.name, quantity);
      setIsAdding(false);
      setIsSidebarOpen(true); // Open the sidebar after adding to cart
    }, 1000);
    setCart([...cart, data])
  };



  return (
    <div className="flex">
      {product.map((data, i) => (
        <div key={i} className="flex-1 p-4 border border-gray-200 rounded shadow">

          <h2 className="text-xl font-bold mb-4">{data.name}</h2>
          <p className="mb-4">${data.price}</p>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="w-16 p-2 border border-gray-300 rounded"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button
            className={`px-4 py-2 rounded ${ 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors duration-300`}
            // disabled={isAdding}
            onClick={() => handleAddToCart(data)}
          >
            { 'Add to Cart'}
          </button>
        </div>
      ))}
      <div className={`fixed top-0 right-0 h-screen w-[40%] bg-white transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-between items-center bg-[#f5f5f5] px-7 py-2'>

          <p className='text-[#8d8d8d] text-[12px] font-semibold'>REVIEW YOUR CART</p>
          <button className="tex-[#8d8d8d]" onClick={handleSidebarToggle}>
            X
          </button>
        </div>
        {
          !cart.length &&
          <div className='p-[10%] text-center '>
            <p className='bg-[#fcf8e3] p-[5%] text-[#8a6d3b] border-[0px] round-[1%] outline-0'>
              Your cart is empty
            </p>
          </div>
        }
        {isSidebarOpen && (
          <div className={` ${cart.length && " max-h-[35%] overflow-y-auto"} `}>
            {cart.map((item,i) => (
              <div key={i}>
                <CartSliderItem name={item.name} price={item.price} />
              </div>
            ))}
          </div>
        )}
        <div className='px-7 py-2'>
          <div className='flex justify-between border-b py-4 border-[#eee]'>
            <span className='text-[14px] font-semibold'>Subtotal:</span>
            <span className='text-[14px] font-semibold'>$765</span>
          </div>
          <div className='flex justify-between border-b py-4 border-[#eee]'>
            <span className='text-[14px] font-semibold'>Grand total:</span>
            <span className='text-[14px] font-semibold'>$765</span>
          </div>
          <button className='bg-black border border-black text-white w-[100%] text-[13px] h-[52px] font-bold'>
            CHECKOUT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;