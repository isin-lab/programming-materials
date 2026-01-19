import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
	FaCode,
	FaCss3Alt,
	FaReact,
	FaPalette,
	FaLayerGroup,
	FaGamepad,
	FaMobileAlt,
	FaServer,
	FaCheck,
	FaClock,
	FaTimes,
} from 'react-icons/fa'
import './Menu.css'

const Menu = ({ isOpen, closeMenu }) => {
	useEffect(() => {
		const handleEscape = e => {
			if (e.key === 'Escape' && isOpen) {
				closeMenu()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, closeMenu])

	if (!isOpen) return null

	const lessons = [
		{
			id: 1,
			title: 'Стеклянные карточки',
			description: 'Эффект glassmorphism с настраиваемым блюром',
			icon: <FaLayerGroup />,
			tags: ['CSS', 'UI/UX'],
			path: '/glass-cards',
			available: true,
		},
		{
			id: 2,
			title: 'CSS Анимации',
			description: 'Плавные переходы и ключевые кадры',
			icon: <FaCss3Alt />,
			tags: ['CSS', 'Анимации'],
			path: '/animations',
			available: true,
		},
		{
			id: 3,
			title: 'React Хуки',
			description: 'useState, useEffect и другие',
			icon: <FaReact />,
			tags: ['React', 'JavaScript'],
			path: '/react-hooks',
			available: false,
		},
		{
			id: 4,
			title: 'Интерактивные формы',
			description: 'Валидация и UX улучшения',
			icon: <FaCode />,
			tags: ['JavaScript', 'UI/UX'],
			path: '/interactive-forms',
			available: false,
		},
		{
			id: 5,
			title: 'Цветовые схемы',
			description: 'Динамическое переключение тем',
			icon: <FaPalette />,
			tags: ['CSS', 'JavaScript'],
			path: '/color-schemes',
			available: false,
		},
		{
			id: 6,
			title: 'Игра на JS',
			description: 'Создание игры на чистом JavaScript',
			icon: <FaGamepad />,
			tags: ['JavaScript', 'Игры'],
			path: '/js-game',
			available: false,
		},
		{
			id: 7,
			title: 'Адаптивный дизайн',
			description: 'Медиа-запросы и Flexbox/Grid',
			icon: <FaMobileAlt />,
			tags: ['CSS', 'Responsive'],
			path: '/responsive-design',
			available: false,
		},
		{
			id: 8,
			title: 'Работа с API',
			description: 'Fetch, Axios и обработка данных',
			icon: <FaServer />,
			tags: ['JavaScript', 'API'],
			path: '/api-integration',
			available: false,
		},
	]

	return (
		<>
			<div className='menu-overlay' onClick={closeMenu} />
			<div className={`menu-container ${isOpen ? 'open' : ''}`}>
				<div className='menu-header'>
					<h2 className='menu-title'>
						<FaCode />
						<span>Уроки</span>
					</h2>
					<button
						className='glass-button-menu menu-close-btn'
						onClick={closeMenu}
						aria-label='Закрыть меню'
					>
						<FaTimes />
						<span className='menu-close-text'>Закрыть</span>
					</button>
				</div>

				<div className='menu-content'>
					<div className='lessons-grid'>
						{lessons.map(lesson =>
							lesson.available ? (
								<Link
									key={lesson.id}
									to={lesson.path}
									className='lesson-card available'
									onClick={closeMenu}
								>
									<div className='lesson-info'>
										<h3 className='lesson-title'>{lesson.title}</h3>
										<p className='lesson-description'>{lesson.description}</p>
										<div className='lesson-tags'>
											{lesson.tags.map((tag, index) => (
												<span key={index} className='lesson-tag'>
													{tag}
												</span>
											))}
										</div>
									</div>
									<div className='lesson-status available-status'>
										<FaCheck /> Доступен
									</div>
									<div className='lesson-icon'>{lesson.icon}</div>
								</Link>
							) : (
								<div
									key={lesson.id}
									className='lesson-card unavailable'
									onClick={e => {
										e.preventDefault()
										e.stopPropagation()
									}}
								>
									<div className='lesson-info'>
										<h3 className='lesson-title unavailable-title'>
											{lesson.title}
										</h3>
										<p className='lesson-description unavailable-description'>
											{lesson.description}
										</p>
										<div className='lesson-tags'>
											{lesson.tags.map((tag, index) => (
												<span
													key={index}
													className='lesson-tag unavailable-tag'
												>
													{tag}
												</span>
											))}
										</div>
									</div>
									<div className='lesson-status unavailable-status'>
										<FaClock /> Скоро
									</div>
									<div className='lesson-icon'>{lesson.icon}</div>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu
