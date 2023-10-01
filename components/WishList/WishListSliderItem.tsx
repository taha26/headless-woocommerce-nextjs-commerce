"use client"

import Image from "next/image";

type WishListSliderItemProps = {
    name: string;
    price: number;
};

const WishListSliderItem: React.FC<WishListSliderItemProps> = ({ name, price }) => {
    return (
        <div className="flex mx-7 py-8 justify-around mt-3 border-b border-[#eee] " >
            <Image width={100} height={100} src={"https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/170x227/attribute_rule_images/696_source_1545963126.jpg"} alt="product image" />
            <div className=" pl-7">
                <p className="text-[12px] font-semibold">{name}</p>
                <p className="text-[#2d2d2d] text-[13px] leading-4 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora minima</p>
                <p className="text-[13px] font-bold mt-2">${price}</p>
                <div className="flex h-fit mt-5 items-center">
                    <button className="text-[black] text-[12px]  font-medium border-b border-[black] tracking-wide">Add to cart</button>
                    <button className="text-[#ff7677] text-[12px] ml-[5%] font-medium border-b border-[#ff7677] tracking-wide">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default WishListSliderItem;