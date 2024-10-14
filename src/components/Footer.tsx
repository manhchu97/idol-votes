import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-green-200 p-4 flex justify-between items-center">
      <div>
        <p className="font-semibold">CHOI JONG HO WEEK. VOCALIST OF THE CENTURY.</p>
      </div>
      <div className="flex items-center">
        <span className="text-xs bg-white rounded px-1 mr-2">AD</span>
        <ArrowUp className="w-4 h-4" />
      </div>
    </div>
  )
}