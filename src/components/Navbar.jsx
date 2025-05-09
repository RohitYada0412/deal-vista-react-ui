
import { Link } from "react-router-dom";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <div className="logo text-crm-blue text-xl mr-10 flex items-center">
          <div className="w-8 h-8 bg-crm-blue rounded flex items-center justify-center mr-2">
            <span className="text-white text-xs">R</span>
          </div>
          ROSTER
          <span className="text-xs ml-2 text-gray-500">CRM</span>
        </div>
        
        <div className="hidden md:flex space-x-1">
          <Link to="/" className="nav-item">Dashboard</Link>
          <Link to="/roster" className="nav-item flex items-center">
            Roster
            <ChevronDown size={16} className="ml-1" />
          </Link>
          <Link to="/communications" className="nav-item flex items-center">
            Communications
            <ChevronDown size={16} className="ml-1" />
          </Link>
          <Link to="/deals" className="nav-item active">CRM</Link>
          <Link to="/contracts" className="nav-item flex items-center">
            Contracts
            <ChevronDown size={16} className="ml-1" />
          </Link>
          <Link to="/settings" className="nav-item flex items-center">
            Settings
            <ChevronDown size={16} className="ml-1" />
          </Link>
          <Link to="/more" className="nav-item flex items-center">
            More
            <ChevronDown size={16} className="ml-1" />
          </Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Search className="h-5 w-5 text-gray-500" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
        
        <div className="flex items-center">
          <span className="mr-2 hidden md:block text-sm">Michael</span>
          <Avatar className="h-8 w-8 bg-red-500">
            <AvatarFallback className="bg-red-500 text-white">M</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
