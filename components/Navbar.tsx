'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import LogoEnhanced from '@/components/LogoEnhanced'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        {
            name: 'Products',
            href: '/products',
            submenu: [
                { name: 'Eggs & Desi Eggs', href: '/products#eggs' },
                { name: 'Vegetables', href: '/products#green-chilli' },
                { name: 'Fruits', href: '/products#grapes' },
                { name: 'Rice & Grains', href: '/products#basmati-rice' },
                { name: 'Meat Products', href: '/products#frozen-chicken-mutton' },
            ],
        },
        {
            name: 'Services',
            href: '/services',
            submenu: [
                { name: 'Import Services', href: '/import-services' },
                { name: 'Export Services', href: '/export-services' },
                { name: 'Quality Assurance', href: '/quality-assurance' },
            ],
        },
        { name: 'Gallery', href: '/gallery' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-lg'
                    : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered navbar content on desktop */}
                <div className="flex items-center h-20 gap-6 justify-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <LogoEnhanced showText={true} size="md" singleLine />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 items-center justify-center space-x-3">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap text-sm md:text-base ${pathname === link.href
                                            ? 'text-primary-600 font-semibold'
                                            : 'text-gray-700 hover:text-primary-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                                {link.submenu && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Icons */}
                    <div className="hidden lg:flex items-center justify-end flex-shrink-0 space-x-4">
                        <a
                            href="tel:+919049690000"
                            className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            <FiPhone className="text-lg" />
                            <span className="text-sm">9049690000</span>
                        </a>
                        <a
                            href="https://wa.me/919049690000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span className="text-sm">WhatsApp</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-gray-700 focus:outline-none"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-2 rounded-lg ${pathname === link.href
                                            ? 'text-primary-600 font-semibold bg-primary-50'
                                            : 'text-gray-700'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                                {link.submenu && (
                                    <div className="pl-6 mt-1 space-y-1">
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-primary-50"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 border-t space-y-2">
                            <a
                                href="tel:+919049690000"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700"
                            >
                                <FiPhone />
                                <span>9049690000</span>
                            </a>
                            <a
                                href="https://wa.me/919049690000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg"
                            >
                                <FaWhatsapp />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

