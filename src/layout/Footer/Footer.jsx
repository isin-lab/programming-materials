import React from 'react'
import { FaTelegram, FaGithub, FaHeart, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-content'>
					<div className='footer-logo'>
						<span className='footer-logo-text'>PM</span>
						<div className='footer-logo-info'>
							<div className='footer-logo-name'>Programming materials</div>
							<div className='footer-logo-subtitle'>
								Демонстрации для разработчиков
							</div>
						</div>
					</div>

					<div className='footer-info'>
						<p className='footer-description'>
							Еженедельные обучающие демонстрации современных техник
							веб-разработки. Каждый пример содержит готовый код, который можно
							скопировать и адаптировать.
						</p>

						<div className='footer-links'>
							<a
								href='https://t.me/programming_materials_pm'
								target='_blank'
								rel='noopener noreferrer'
								className='footer-link'
							>
								<FaTelegram />
								<span>Telegram канал</span>
							</a>

						</div>
					</div>
				</div>

				<div className='copyright'>
					<p>
						© {new Date().getFullYear()} Programming materials. Все демонстрации
						доступны для свободного использования и изучения.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
