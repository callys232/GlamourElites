import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app/globals.css'
import { ToastProvider } from './component/Toast'
import Layout from './app/layout'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import GalleryPage from './pages/GalleryPage'
import ShopPage from './pages/ShopPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>
)
