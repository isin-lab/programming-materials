import React, { useState } from 'react'
import {
	FaCode,
	FaPlay,
	FaPause,
	FaRedo,
	FaSlidersH,
	FaMagic,
	FaLightbulb,
	FaExclamationTriangle,
	FaMobileAlt,
	FaSyncAlt,
	FaTags,
	FaChevronRight,
	FaExpand,
	FaEye,
	FaRocket,
	FaHeartbeat,
	FaUsers,
} from 'react-icons/fa'
import CodeModal from '../../components/CodeModal/CodeModal'
import './AnimationsLesson.css'

const AnimationsLesson = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalContent, setModalContent] = useState({})
	const [activeAnimation, setActiveAnimation] = useState(1)
	const [animationSpeed, setAnimationSpeed] = useState(1)
	const [isPlaying, setIsPlaying] = useState(true)

	// Что такое анимации и зачем они нужны
	const animationBenefits = [
		{
			icon: <FaEye />,
			title: 'Привлекают внимание',
			description:
				'Анимации направляют взгляд пользователя на важные элементы интерфейса',
		},
		{
			icon: <FaUsers />,
			title: 'Улучшают UX',
			description:
				'Плавные переходы делают взаимодействие с сайтом более естественным и интуитивным',
		},
		{
			icon: <FaHeartbeat />,
			title: 'Оживляют интерфейс',
			description:
				'Анимированные элементы создают ощущение живой, отзывчивой системы',
		},
		{
			icon: <FaRocket />,
			title: 'Современный дизайн',
			description:
				'Анимации — стандарт современного веб-дизайна и создают WOW-эффект',
		},
	]

	// Принцип работы анимаций
	const animationPrinciples = [
		{
			step: 1,
			title: 'HTML элемент + класс',
			description: 'Создайте элемент и добавьте ему класс',
			code: `<div class="box fade-in">
  Элемент с анимацией
</div>`,
			explanation: 'CSS будет искать элементы по этому классу',
		},
		{
			step: 2,
			title: 'Создайте анимацию в CSS',
			description: 'Напишите @keyframes и опишите анимацию',
			code: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
			explanation: '@keyframes определяет последовательность анимации',
		},
		{
			step: 3,
			title: 'Примените анимацию',
			description: 'Назначьте анимацию классу элемента',
			code: `.fade-in {
  animation: fadeIn 1s ease-out;
}`,
			explanation: 'CSS применяет анимацию ко всем элементам с классом fade-in',
		},
		{
			step: 4,
			title: 'Анимация запускается!',
			description: 'Элемент автоматически начинает анимироваться',
			code: `<!-- Результат -->
<div class="box fade-in" 
     style="animation: fadeIn 1s ease-out;">
  Элемент плавно появляется
</div>`,
			explanation: 'Браузер запускает анимацию при загрузке страницы',
		},
	]

	// Типы анимаций с понятными примерами
	const animations = [
		{
			id: 1,
			title: 'Появление (Fade In)',
			description: 'Плавное появление элемента из невидимости',
			type: 'fadeIn',
			demoTitle: 'Нажмите, чтобы увидеть эффект появления',
			htmlCode: `<div class="notification fade-in">
  Новое уведомление
</div>

<button class="btn fade-in">Кнопка</button>

<div class="card fade-in">
  <h3>Заголовок</h3>
  <p>Текст карточки</p>
</div>`,
			cssCode: `/* Создаем анимацию появления */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Применяем анимацию к классу fade-in */
.fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* Дополнительные стили для примера */
.notification {
  background: #4ecdc4;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
}

.btn {
  background: #9d50bb;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}`,
			usage: 'Для уведомлений, кнопок, карточек при загрузке',
		},
		{
			id: 2,
			title: 'Сдвиг (Slide In)',
			description: 'Элемент выезжает сбоку или снизу',
			type: 'slideIn',
			demoTitle: 'Эффект выезжающего элемента',
			htmlCode: `<nav class="sidebar slide-in">
  <a href="#">Главная</a>
  <a href="#">О нас</a>
  <a href="#">Контакты</a>
</nav>

<div class="alert slide-in">
  Важное сообщение!
</div>

<button class="menu-btn slide-in">
  Открыть меню
</button>`,
			cssCode: `/* Анимация сдвига слева */
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Анимация сдвига снизу */
@keyframes slideInBottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Применяем анимации */
.slide-in {
  animation: slideInLeft 0.3s ease-out;
}

/* Для элементов, которые должны выезжать снизу */
.alert.slide-in {
  animation: slideInBottom 0.4s ease-out;
}

/* Стили для примера */
.sidebar {
  background: #333;
  padding: 20px;
  border-radius: 8px;
}

.sidebar a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 0;
}

.alert {
  background: #ffa726;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
}

.menu-btn {
  background: #4ecdc4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}`,
			usage: 'Для боковых меню, всплывающих уведомлений',
		},
		{
			id: 3,
			title: 'Масштаб (Scale)',
			description: 'Увеличение или уменьшение элемента',
			type: 'scale',
			demoTitle: 'Нажмите для увеличения',
			htmlCode: `<button class="scale-btn">
  Увеличить меня
</button>

<div class="product-card scale-hover">
  <img src="product.jpg" alt="Товар">
  <h4>Название товара</h4>
  <p>Описание товара</p>
</div>

<div class="badge scale-pulse">
  Новинка!
</div>`,
			cssCode: `/* Анимация увеличения */
@keyframes scaleUp {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

/* Анимация пульсации */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Применяем анимации */
.scale-btn:active {
  animation: scaleUp 0.2s ease-out;
}

.scale-hover:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.scale-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

/* Стили для примера */
.scale-btn {
  background: linear-gradient(135deg, #4ecdc4, #9d50bb);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
}

.product-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  max-width: 300px;
  transition: transform 0.3s ease;
}

.badge {
  background: #ff6b6b;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  font-weight: bold;
}`,
			usage: 'Для кнопок при нажатии, карточек при наведении',
		},
		{
			id: 4,
			title: 'Вращение (Rotate)',
			description: 'Вращение элемента вокруг своей оси',
			type: 'rotate',
			demoTitle: 'Бесконечное вращение',
			htmlCode: `<div class="loading">
  <div class="spinner rotate"></div>
  Загрузка...
</div>

<button class="refresh rotate-hover">
  <span class="icon">⟳</span>
  Обновить
</button>

<div class="logo rotate-slow">
  <span>⚙️</span>
</div>`,
			cssCode: `/* Анимация вращения */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Медленное вращение */
@keyframes rotateSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Применяем анимации */
.rotate {
  animation: rotate 1s linear infinite;
}

.rotate-slow {
  animation: rotateSlow 3s linear infinite;
}

.rotate-hover:hover .icon {
  animation: rotate 0.5s linear;
}

/* Стили для примера */
.loading {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255,255,255,0.1);
  border-top-color: #4ecdc4;
  border-radius: 50%;
}

.refresh {
  background: #4ecdc4;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  font-size: 3rem;
  display: inline-block;
}`,
			usage: 'Для индикаторов загрузки, иконок обновления',
		},
		{
			id: 5,
			title: 'Пульсация (Pulse)',
			description: 'Ритмичное изменение размера и прозрачности',
			type: 'pulse',
			demoTitle: 'Привлекает внимание',
			htmlCode: `<button class="cta-button pulse">
  Купить сейчас!
</button>

<div class="notification pulse-alert">
  Срочное уведомление!
</div>

<span class="badge pulse">
  5
</span>`,
			cssCode: `/* Анимация пульсации */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(78, 205, 196, 0.7);
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
    box-shadow: 0 0 0 10px rgba(78, 205, 196, 0);
  }
}

/* Более быстрая пульсация */
@keyframes pulseFast {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Применяем анимации */
.pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

.pulse-alert {
  animation: pulseFast 0.8s ease-in-out infinite;
}

/* Стили для примера */
.cta-button {
  background: linear-gradient(135deg, #ff6b6b, #ffa726);
  color: white;
  padding: 18px 36px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(255,107,107,0.3);
}

.notification {
  background: #ffa726;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  margin: 10px 0;
  font-weight: bold;
}

.badge {
  background: #4ecdc4;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
}`,
			usage: 'Для призывов к действию, срочных уведомлений',
		},
		{
			id: 6,
			title: 'Подскок (Bounce)',
			description: 'Эффект отскакивающего мячика',
			type: 'bounce',
			demoTitle: 'Эффект подпрыгивания',
			htmlCode: `<div class="message bounce">
  Новое сообщение!
</div>

<button class="fun-btn bounce-on-hover">
  Нажми меня!
</button>

<div class="emoji bounce-slow">
  🏀
</div>`,
			cssCode: `/* Анимация подскока */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

/* Медленный подскок */
@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* Применяем анимации */
.bounce {
  animation: bounce 1s ease;
}

.bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}

.bounce-on-hover:hover {
  animation: bounce 0.5s ease;
}

/* Стили для примера */
.message {
  background: #9d50bb;
  color: white;
  padding: 20px;
  border-radius: 12px;
  font-size: 18px;
  text-align: center;
  max-width: 300px;
}

.fun-btn {
  background: linear-gradient(135deg, #4ecdc4, #9d50bb);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.emoji {
  font-size: 4rem;
  display: inline-block;
}`,
			usage: 'Для уведомлений, игровых элементов, интересных кнопок',
		},
	]

	const handleShowCode = (title, htmlCode, cssCode, fileName) => {
		const fullCode = `<!-- HTML код -->
${htmlCode}

<style>
/* CSS код */
${cssCode}
</style>`

		setModalContent({
			title: title,
			code: fullCode,
			language: 'html',
			fileName:
				fileName ||
				`animation-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.html`,
		})
		setIsModalOpen(true)
	}

	const toggleAnimation = () => {
		setIsPlaying(!isPlaying)
	}

	const resetAnimation = () => {
		setActiveAnimation(prev => prev)
		setIsPlaying(true)
	}

	const getAnimationStyle = animationType => {
		return {
			animationPlayState: isPlaying ? 'running' : 'paused',
			animationDuration: `${1 / animationSpeed}s`,
			width: '120px',
			height: '120px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background:
				'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
			borderRadius: '20px',
			color: 'white',
			fontSize: '32px',
			fontWeight: 'bold',
			margin: '0 auto',
			boxShadow: '0 10px 30px rgba(78, 205, 196, 0.3)',
		}
	}

	return (
		<div className='lesson-page'>
			{/* Заголовок урока */}
			<header className='lesson-header'>
				<div className='container'>
					<h1 className='lesson-title'>
						<FaMagic /> CSS Анимации
					</h1>
					<p className='lesson-subtitle'>
						Изучите как добавлять анимации к любым HTML элементам с помощью CSS.
						Просто добавьте класс и наблюдайте за магией!
					</p>

					<div className='lesson-meta'>
						<span className='meta-item'>
							<FaCode /> CSS, UI/UX, Современные техники
						</span>
						<span className='meta-item'>
							<FaLightbulb /> 15-20 минут изучения
						</span>
					</div>
				</div>
			</header>

			{/* Блок "Что такое анимации и зачем они нужны" */}
			<section className='intro-section'>
				<div className='container'>
					<h2 className='intro-title'>
						<FaLightbulb /> Что такое CSS анимации и зачем они нужны?
					</h2>

					<div className='intro-content'>
						<div className='intro-text'>
							<p>
								<strong>CSS анимации</strong> — это техника создания плавных
								переходов и движений элементов на веб-странице с помощью
								каскадных таблиц стилей. В отличие от JavaScript анимаций, CSS
								анимации работают на уровне движка браузера и обеспечивают
								высокую производительность.
							</p>

							<p>
								Анимации превращают статичные интерфейсы в живые, отзывчивые
								системы, которые реагируют на действия пользователя и создают
								запоминающийся опыт взаимодействия.
							</p>
						</div>

						<div className='intro-benefits'>
							<h3>Почему стоит использовать анимации?</h3>

							<div className='benefits-grid'>
								{animationBenefits.map((benefit, index) => (
									<div key={index} className='benefit-card'>
										<div className='benefit-icon'>{benefit.icon}</div>
										<h4 className='benefit-title'>{benefit.title}</h4>
										<p className='benefit-description'>{benefit.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Основной контент */}
			<div className='lesson-content'>
				{/* Принцип работы анимаций */}
				<section className='lesson-section principles-section'>
					<div className='container'>
						<h2 className='section-title'>
							<FaChevronRight /> Как это работает?
						</h2>
						<p className='section-description'>
							CSS анимации работают через связь HTML классов и CSS правил. Всего
							4 простых шага:
						</p>

						<div className='principles-grid'>
							{animationPrinciples.map(principle => (
								<div key={principle.step} className='principle-card'>
									<div className='principle-header'>
										<div className='step-number'>{principle.step}</div>
										<h3 className='principle-title'>{principle.title}</h3>
									</div>
									<p className='principle-description'>
										{principle.description}
									</p>
									<div className='principle-code'>
										<pre>
											<code>{principle.code}</code>
										</pre>
									</div>
									<div className='principle-explanation'>
										<FaChevronRight /> {principle.explanation}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Демонстрация анимаций */}
				<section className='lesson-section demo-section'>
					<div className='container'>
						<h2 className='section-title'>
							<FaPlay /> Популярные анимации
						</h2>
						<p className='section-description'>
							Выберите анимацию, посмотрите демо и получите готовый код.
						</p>

						<div className='demo-controls'>
							<div className='controls-group'>
								<div className='speed-control'>
									<label>
										<FaSlidersH /> Скорость:
										<span className='control-value'>
											{animationSpeed.toFixed(1)}x
										</span>
									</label>
									<input
										type='range'
										min='0.1'
										max='3'
										step='0.1'
										value={animationSpeed}
										onChange={e =>
											setAnimationSpeed(parseFloat(e.target.value))
										}
										className='range-slider'
									/>
								</div>

								<div className='playback-controls'>
									<button className='control-btn' onClick={toggleAnimation}>
										{isPlaying ? <FaPause /> : <FaPlay />}
										{isPlaying ? 'Пауза' : 'Играть'}
									</button>
									<button
										className='control-btn reset'
										onClick={resetAnimation}
									>
										<FaRedo /> Сбросить
									</button>
								</div>
							</div>
						</div>

						<div className='animations-grid'>
							{animations.map(animation => (
								<div
									key={animation.id}
									className={`animation-card ${activeAnimation === animation.id ? 'active' : ''}`}
									onClick={() => setActiveAnimation(animation.id)}
								>
									<div className='animation-demo-area'>
										<div
											className={`animation-preview ${animation.type}`}
											style={getAnimationStyle(animation.type)}
										>
											{animation.type === 'fadeIn' && '◌'}
											{animation.type === 'slideIn' && '→'}
											{animation.type === 'scale' && '⛶'}
											{animation.type === 'rotate' && '⟳'}
											{animation.type === 'pulse' && '❤'}
											{animation.type === 'bounce' && '↕'}
										</div>
										<div className='demo-title'>{animation.demoTitle}</div>
									</div>

									<div className='animation-info'>
										<h3 className='animation-name'>{animation.title}</h3>
										<p className='animation-description'>
											{animation.description}
										</p>
										<div className='animation-usage'>
											<FaExclamationTriangle /> {animation.usage}
										</div>
									</div>

									<div className='animation-actions'>
										<button
											className='show-code-btn'
											onClick={e => {
												e.stopPropagation()
												handleShowCode(
													animation.title,
													animation.htmlCode,
													animation.cssCode,
													`animation-${animation.type}.html`,
												)
											}}
										>
											<FaCode /> Показать код (HTML + CSS)
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Мобильная адаптация */}
				<section className='lesson-section mobile-section'>
					<div className='container'>
						<h2 className='section-title'>
							<FaMobileAlt /> Для мобильных устройств
						</h2>

						<div className='mobile-tips'>
							<div className='mobile-tip'>
								<div className='tip-icon'>
									<FaMobileAlt />
								</div>
								<h3>Упрощайте анимации</h3>
								<p>
									На мобильных устройствах используйте короткие и плавные
									анимации.
								</p>
								<pre>
									<code>{`@media (max-width: 768px) {
  .animation {
    animation-duration: 0.3s;
  }
}`}</code>
								</pre>
							</div>

							<div className='mobile-tip'>
								<div className='tip-icon'>
									<FaSyncAlt />
								</div>
								<h3>Оптимизация</h3>
								<p>
									Используйте transform и opacity для лучшей производительности.
								</p>
								<pre>
									<code>{`.element {
  transform: translateX(100px);
  opacity: 0.5;
}`}</code>
								</pre>
							</div>

							<div className='mobile-tip'>
								<div className='tip-icon'>
									<FaExclamationTriangle />
								</div>
								<h3>Доступность</h3>
								<p>
									Учитывайте пользователей, которые предпочитают меньше
									анимаций.
								</p>
								<pre>
									<code>{`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
  }
}`}</code>
								</pre>
							</div>
						</div>
					</div>
				</section>

				{/* Практическое задание */}
				<section className='lesson-section challenge-section'>
					<div className='container'>
						<h2 className='section-title'>
							<FaCode /> Практическое задание
						</h2>

						<div className='challenge-content'>
							<div className='challenge-description'>
								<h3>Создайте анимированную кнопку:</h3>
								<ol>
									<li>
										Создайте HTML кнопку с классом <code>animated-btn</code>
									</li>
									<li>Добавьте плавное изменение цвета при наведении</li>
									<li>Сделайте анимацию нажатия</li>
									<li>Добавьте плавное появление при загрузке</li>
								</ol>
							</div>

							<div className='challenge-demo'>
								<button className='challenge-button'>Нажми меня!</button>
							</div>

							<div className='challenge-solution'>
								<button
									className='solution-btn'
									onClick={() =>
										handleShowCode(
											'Решение: Анимированная кнопка',
											`<button class="animated-btn">
  Нажми меня!
</button>`,
											`/* Базовые стили */
.animated-btn {
  background: linear-gradient(135deg, #4ecdc4, #9d50bb);
  color: white;
  padding: 18px 36px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: appear 0.5s ease-out;
}

/* Анимация появления */
@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Эффект при наведении */
.animated-btn:hover {
  background: linear-gradient(135deg, #9d50bb, #4ecdc4);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(78, 205, 196, 0.3);
}

/* Эффект при нажатии */
.animated-btn:active {
  transform: scale(0.95);
}

/* Для мобильных */
@media (max-width: 768px) {
  .animated-btn {
    padding: 20px 40px;
    font-size: 20px;
  }
}`,
											'animated-button.html',
										)
									}
								>
									<FaCode /> Показать решение
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* Модальное окно с кодом */}
			<CodeModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title={modalContent.title}
				code={modalContent.code}
				language={modalContent.language}
				fileName={modalContent.fileName}
			/>
		</div>
	)
}

export default AnimationsLesson
