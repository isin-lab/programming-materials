import React from 'react'
import {
	FaCode,
	FaBookOpen,
	FaUsers,
	FaExternalLinkAlt,
	FaTelegramPlane,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Home.css'
import em from '../../images/em.jpg'
import ew from '../../images/ew.jpg'
import ewb from '../../images/ewb.jpg'

const Home = () => {
	// Партнерские телеграм каналы
	const telegramChannels = [
		{
			id: 1,
			name: 'English Materials',
			description: 'Журналы и пособия по английскому языку для ознакомления.',
			url: 'https://t.me/materials_en',
			img: em,
		},
		{
			id: 2,
			name: 'English Workout',
			description:
				'Интерактивные карточки и упражнения для изучающих и преподавателей',
			url: 'https://t.me/english_work_out',
			img: ew,
		},
		{
			id: 3,
			name: 'English Workout Bot',
			description: 'Бот для изучения английского!',
			url: 'https://t.me/simple_eng_workout_bot',
			img: ewb,
		},
	]

	// Последние уроки
	const latestLessons = [
		{
			id: 1,
			title: 'Стеклянные карточки',
			description: 'Glassmorphism эффекты',
			link: '/glass-cards',
			color: '#4ecdc4',
		},
		{
			id: 2,
			title: 'CSS Анимации',
			description: 'Плавные переходы и keyframes',
			link: '/animations',
			color: '#ff6b6b',
		},
		// {
		// 	id: 3,
		// 	title: 'React Хуки',
		// 	description: 'useState, useEffect и другие',
		// 	link: '/react-hooks',
		// 	color: '#9d50bb',
		// },
	]

	return (
		<div className='home-page'>
			{/* Герой секция */}
			<section className='hero-section'>
				<div className='hero-background'>
					<div className='hero-circle circle-1'></div>
					<div className='hero-circle circle-2'></div>
				</div>

				<div className='container'>
					<div className='hero-content'>
						<h1 className='titleMe'>
							Programming Materials
						</h1>
						<p className='hero-subtitle'>
							Изучайте современные техники веб-разработки через практические
							демонстрации с готовым кодом.
						</p>

						<div className='hero-actions'>
							<Link to='/glass-cards' className='glass-button primary-btn'>
								<FaCode /> Начать обучение
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Информация о проекте */}
			<section className='info-section'>
				<div className='container'>
					<div className='info-cards'>
						<div className='info-card glass-effect'>
							<div className='info-icon'>
								<FaBookOpen />
							</div>
							<h3>Практические уроки</h3>
							<p>
								Каждый урок — это готовая демонстрация с интерактивными
								элементами, которую можно изучить и использовать в своих
								проектах.
							</p>
						</div>

						<div className='info-card glass-effect'>
							<div className='info-icon'>
								<FaCode />
							</div>
							<h3>Готовый код</h3>
							<p>
								Получайте чистый, готовый к использованию код в формате HTML,
								CSS или JavaScript. Копируйте и адаптируйте под свои нужды.
							</p>
						</div>

						<div className='info-card glass-effect'>
							<div className='info-icon'>
								<FaUsers />
							</div>
							<h3>Сообщество</h3>
							<p>
								Присоединяйтесь к сообществу разработчиков, делитесь опытом и
								изучайте новые технологии вместе с нами.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Последние уроки */}
			<section className='lessons-section'>
				<div className='container'>
					<h2 className='section-title'>
						<FaBookOpen /> Последние уроки
					</h2>

					<div className='lessons-grid'>
						{latestLessons.map(lesson => (
							<Link
								key={lesson.id}
								to={lesson.link}
								className='lesson-card glass-effect'
								style={{ borderLeft: `4px solid ${lesson.color}` }}
							>
								<div className='lesson-content'>
									<h3 className='lesson-title'>{lesson.title}</h3>
									<p className='lesson-description'>{lesson.description}</p>
									<span className='lesson-link'>
										Изучить урок <FaExternalLinkAlt />
									</span>
								</div>
								<div className='lesson-icon'>
									<FaCode />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Телеграм каналы партнеров */}
			<section className='channels-section'>
				<div className='container'>
					<h2 className='section-title'>
						<FaTelegramPlane /> Партнерские каналы
					</h2>

					<div className='channels-grid'>
						{telegramChannels.map(channel => (
							<a
								key={channel.id}
								href={channel.url}
								target='_blank'
								rel='noopener noreferrer'
								className='channel-card glass-effect'
							>
								<div className='channel-header'>
									<div className='channel-logo'>
										<img
											src={channel.img}
											alt={`${channel.name} logo`}
											className='channel-logo-img'
										/>
									</div>
									<div>
										<h3 className='channel-name'>{channel.name}</h3>
										<p className='channel-desc'>{channel.description}</p>
									</div>
								</div>
								<div className='channel-action'>
									<FaTelegramPlane />
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Рекламный баннер */}
			<section className='ad-section'>
				<div className='container'>
					<div className='ad-banner glass-effect'>
						<div className='ad-content'>
							<div className='ad-text'>
								<h3>📢 Здесь может быть ваша реклама</h3>
								<p>Представьте свой продукт аудитории разработчиков</p>
							</div>
							<a
								href='https://t.me/volkov130'
								target='_blank'
								rel='noopener noreferrer'
								className='glass-button ad-btn'
							>
								<FaTelegramPlane /> Узнать условия в Telegram
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className='cta-section'>
				<div className='container'>
					<div className='cta-content glass-effect'>
						<h2>Готовы начать?</h2>
						<p>Выберите интересующий урок и начните изучение прямо сейчас.</p>
						<Link to='/glass-cards' className='glass-button cta-btn'>
							<FaCode /> Перейти к урокам
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
