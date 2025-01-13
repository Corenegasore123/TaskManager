// src/components/Sidebar.tsx

import Link from 'next/link'
import { Home, CheckSquare, ListTodo, RotateCcw, CheckCircle, Users, Settings } from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen">
      <div className="p-4">
        <Link href="/" className="text-xl font-bold flex items-center">
          <span className="text-purple-600">Task</span>
          <span>Manager</span>
        </Link>
      </div>
      
      <nav className="mt-8">
        <SidebarLink href="/dashboard" icon={Home} text="Home" />
        <SidebarLink href="/tasks" icon={CheckSquare} text="Tasks" />
        <SidebarLink href="/todo" icon={ListTodo} text="To Do" />
        <SidebarLink href="/ongoing" icon={RotateCcw} text="Ongoing" />
        <SidebarLink href="/completed" icon={CheckCircle} text="Completed" />
        <div className="mt-8">
          <SidebarLink href="/team" icon={Users} text="Invite Team" />
          <SidebarLink href="/settings" icon={Settings} text="Settings" />
        </div>
      </nav>
    </div>
  )
}

function SidebarLink({ href, icon: Icon, text }: { href: string; icon: any; text: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
    >
      <Icon className="w-5 h-5 mr-3" />
      {text}
    </Link>
  )
}