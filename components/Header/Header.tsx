"use client"
type HeaderProps = {
    
    isSidebarOpen: boolean;
    handleSidebarToggle: () => void
    handleWLSidebarToggle: () => void
    wList:any
  };

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, handleSidebarToggle,handleWLSidebarToggle,wList}) => {
    return (
      <header className="flex items-center justify-between p-5 bg-gray-800 text-white">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">E-Commerce Website</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 pl-10 text-gray-800 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-6 h-6 text-gray-400 left-3 top-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="relative" onClick={handleWLSidebarToggle}>
            WISH LIST
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              {wList.length}
            </span>
          </div>
          <div className="relative" onClick={handleSidebarToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-400 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M5 6h2l2.5 15h7L17 6h2" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              2
            </span>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;