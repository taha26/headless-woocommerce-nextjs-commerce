"use client"
import WishListSliderItem from './WishListSliderItem';

type Product = {
  id: number;
  name: string;
  price: number;
};

type WishListProps = {
  product: Product[];
  isWLSidebarOpen: boolean;
  setIsWLSidebarOpen: (e: boolean) => void;
  handleWLSidebarToggle: () => void;
  wList: Product[];
  setWList: (e: Product[]) => void
};

const WishList: React.FC<WishListProps> = ({  isWLSidebarOpen, setIsWLSidebarOpen, handleWLSidebarToggle ,wList,setWList}) => {
  return (
    <div className="flex">
      <div className={`fixed top-0 right-0 h-screen w-[40%] bg-white transition-transform duration-300 ease-in-out transform ${isWLSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-between items-center bg-[#f5f5f5] px-7 py-2'>

          <p className='text-[#8d8d8d] text-[12px] font-semibold'>REVIEW YOUR WISH LIST</p>
          <button className="tex-[#8d8d8d]" onClick={handleWLSidebarToggle}>
            X
          </button>
        </div>
        {
          !wList.length &&
          <div className='p-[10%] text-center '>
            <p className='bg-[#fcf8e3] p-[5%] text-[#8a6d3b] border-[0px] round-[1%] outline-0'>
              Your Wish List is empty
            </p>
          </div>
        }
        {isWLSidebarOpen && (
          <div className={` ${wList.length && " max-h-[95%] overflow-y-auto"} `}>
            {wList.map((item,i) => (
              <div key={i}>
                <WishListSliderItem name={item.name} price={item.price} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;