import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import FloatingActions from '../component/FloatingActions'

const noLayout = ['/signin', '/signup', '/admin']

export default function Layout() {
  const { pathname } = useLocation()
  const hide = noLayout.some(p => pathname.startsWith(p))

  return (
    <div className="min-h-screen bg-[#0c0000] text-white overflow-x-hidden flex flex-col">
      {!hide && <Navbar />}
      <main className={`flex-1 w-full ${!hide ? 'pt-[60px]' : ''}`}>
        <Outlet />
      </main>
      {!hide && <Footer />}
      {!hide && <FloatingActions />}
    </div>
  )
}
