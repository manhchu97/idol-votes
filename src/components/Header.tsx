import { Crown, Gift, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center border-b">
      <div className="flex items-center">
        <Crown className="text-pink-500 w-6 h-6" />
      </div>
      <div className="flex items-center space-x-4">
        <Gift className="w-6 h-6" />
        <Menu className="w-6 h-6" />
      </div>
    </header>
  );
}
