import { Home, BarChart2, Vote, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'home', icon: Home, label: 'Home' },
  { name: 'vote', icon: Vote, label: 'Vote' },
  { name: 'pk', icon: Vote, label: 'Pk' },
]

export default function Navigation({ activeItem, setActiveItem }: { activeItem: string, setActiveItem: (item: string) => void }) {
  return (
    <nav className="bg-white border-t p-2 relative">
      <ul className="flex justify-between">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={`/${item.name === 'home' ? '' : item.name}`}
              className={`flex flex-col items-center text-xs ${activeItem === item.name ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveItem(item.name)}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-blue-500"
        initial={false}
        animate={{
          width: '20%',
          x: `${navItems.findIndex((item) => item.name === activeItem) * 100}%`,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </nav>
  )
}