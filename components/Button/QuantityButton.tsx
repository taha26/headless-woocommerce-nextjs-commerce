"use client"
import { useState } from 'react';

type QuantityButtonProps = {
    initialValue: number;
    onQuantityChange: (quantity: number) => void;
};

const QuantityButton: React.FC<QuantityButtonProps> = ({ initialValue, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialValue);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div className="flex items-center text-black ">
            <button
                className="px-4 py-2   border border-[#dedede]"
                onClick={decrementQuantity}
            >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M5 10a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2H5z"
                    />
                </svg>
            </button>
            <span className="px-4 py-1 w-[70px] text-center  border-y  border-[#dedede]">{quantity}</span>
            <button
                className="px-4 py-2  border border-[#dedede] "
                onClick={incrementQuantity}
            >
                <svg className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 6v12M6 12h12" />
                </svg>
            </button>
        </div>
    );
};

export default QuantityButton;