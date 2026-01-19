import React, { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'
import './Layout.css'

const Layout = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<div className='layout'>
			<Header toggleMenu={toggleMenu} />
			<Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
			<main className='main-content'>
				<div className='container'>{children}</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout
