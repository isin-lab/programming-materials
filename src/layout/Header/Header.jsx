import React from 'react'
import { FaTelegramPlane, FaBars } from 'react-icons/fa'
import './Header.css'

const Header = ({ toggleMenu }) => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header-content'>
					<a href='/' className='logo-link'>
						<span className='logo-text'>PM</span>
						<div className='logo-info'>
							<div className='logo-name'>Programming materials</div>
							<div className='logo-subtitle'>
								Демонстрации для разработчиков
							</div>
						</div>
					</a>

					<nav className='header-nav'>
						<a
							href='https://t.me/programming_materials_pm'
							target='_blank'
							rel='noopener noreferrer'
							className='telegram-button glass-button'
						>
							<FaTelegramPlane />
							<span>Telegram</span>
						</a>

						<button
							className='menu-toggle glass-button'
							onClick={toggleMenu}
							aria-label='Открыть меню уроков'
						>
							<FaBars />
							<span>Уроки</span>
						</button>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
