import React, { useState } from 'react'
import {
	FaCss3Alt,
	FaCode,
	FaLightbulb,
	FaPlayCircle,
	FaCopy,
	FaDownload,
	FaSlidersH,
	FaStar,
	FaGem,
	FaSnowflake,
	FaMoon,
	FaPalette,
	FaInfinity,
	FaFilter,
	FaFont,
	FaMagic,
} from 'react-icons/fa'
import CodeModal from '../../components/CodeModal/CodeModal'
import './GlassCardsLesson.css'

const GlassCardsLesson = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalContent, setModalContent] = useState({})

	// Настройки демо
	const [blurLevel, setBlurLevel] = useState(10)
	const [opacityLevel, setOpacityLevel] = useState(10)
	const [borderOpacity, setBorderOpacity] = useState(20)

	// Демо карточки
	const demoCards = [
		{
			id: 1,
			title: 'Легкое размытие',
			description:
				'Карточка с минимальным блюр-эффектом (5px). Текст хорошо читается, но эффект стекла едва заметен.',
			icon: <FaStar />,
			blur: 5,
			opacity: 8,
			borderOpacity: 10,
			gradient: false,
			tag: 'Слабое размытие',
		},
		{
			id: 2,
			title: 'Градиентный стеклянный',
			description:
				'Сочетание градиентного фона и размытия 15px создает красивый объемный эффект.',
			icon: <FaGem />,
			blur: 15,
			opacity: 10,
			borderOpacity: 15,
			gradient: true,
			tag: 'Среднее размытие',
		},
		{
			id: 3,
			title: 'Морозное стекло',
			description:
				'Более интенсивное размытие (25px) создает эффект матового морозного стекла.',
			icon: <FaSnowflake />,
			blur: 25,
			opacity: 5,
			borderOpacity: 20,
			gradient: false,
			tag: 'Морозный эффект',
		},
		{
			id: 4,
			title: 'Ночной режим',
			description: 'Темный фон с сильным размытием (40px) и цветной границей.',
			icon: <FaMoon />,
			blur: 40,
			opacity: 70,
			borderOpacity: 20,
			gradient: false,
			tag: 'Сильное размытие',
			dark: true,
		},
		{
			id: 5,
			title: 'Цветной градиент',
			description:
				'Цветной градиентный фон с размытием 30px создает эффект цветного стекла.',
			icon: <FaPalette />,
			blur: 30,
			opacity: 15,
			borderOpacity: 20,
			gradient: true,
			tag: 'Цветное стекло',
		},
		{
			id: 6,
			title: 'Максимальное размытие',
			description:
				'Экстремальное размытие (60px) создает эффект толстого матового стекла.',
			icon: <FaInfinity />,
			blur: 60,
			opacity: 3,
			borderOpacity: 5,
			gradient: false,
			tag: 'Максимальный блюр',
		},
	]

	// Контент урока
	const lessonContent = {
		introduction: `Стеклянный морфизм (Glassmorphism) — это современный тренд в UI-дизайне, который использует прозрачность и размытие фона для создания эффекта стеклянных поверхностей. Этот эффект добавляет глубину интерфейсу и создает ощущение слоев, улучшая визуальную иерархию и придавая современный вид приложениям.`,

		// Изменил принципы на карточки как преимущества
		principles: [
			{
				title: 'Размытие фона',
				description:
					'Использование CSS свойства backdrop-filter для создания эффекта прозрачного стекла',
			},
			{
				title: 'Полупрозрачность',
				description:
					'Оптимальная прозрачность фона (5-20%) для сохранения читаемости текста',
			},
			{
				title: 'Светлые границы',
				description:
					'Тонкие светлые границы подчеркивают стеклянную текстуру и добавляют объем',
			},
			{
				title: 'Тени и объем',
				description:
					'Нежные тени создают глубину и помогают элементам выделяться на фоне',
			},
			{
				title: 'Контрастный текст',
				description:
					'Яркий контрастный текст необходим для сохранения читаемости на стеклянном фоне',
			},
			{
				title: 'Плавные переходы',
				description:
					'Анимации и переходы делают интерфейс живым и интерактивным',
			},
		],

		benefits: [
			'Создает современный и стильный внешний вид',
			'Добавляет глубину и слоистость интерфейсу',
			'Улучшает визуальную иерархию элементов',
			'Работает как на темных, так и на светлых фонах',
			'Поддерживается во всех современных браузерах',
			'Повышает воспринимаемое качество продукта',
		],

		codeExamples: {
			basic: `.glass-card {
  /* Полупрозрачный фон */
  background: rgba(255, 255, 255, 0.1);
  
  /* Размытие фона */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  /* Стеклянная граница */
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* Скругление углов */
  border-radius: 12px;
  
  /* Тень для объема */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  /* Плавные переходы */
  transition: all 0.3s ease;
}

/* Эффект при наведении */
.glass-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}`,

			advanced: `.glass-card-advanced {
  /* Градиентный фон для объемного эффекта */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.05)
  );
  
  /* Интенсивное размытие */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  
  /* Яркая граница */
  border: 1px solid rgba(255, 255, 255, 0.25);
  
  /* Скругление углов */
  border-radius: 16px;
  
  /* Комплексная тень */
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  /* Плавные переходы */
  transition: all 0.4s ease;
}

.glass-card-advanced:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}`,
		},
	}

	// Функции
	const generateCardCode = card => {
		const gradientCode = card.gradient
			? `background: linear-gradient(135deg, 
    rgba(255, 255, 255, ${(card.opacity / 100).toFixed(2)}), 
    rgba(255, 255, 255, ${((card.opacity / 100) * 0.5).toFixed(2)}));\n  `
			: card.dark
				? `background: rgba(30, 30, 46, ${(card.opacity / 100).toFixed(2)});\n  `
				: `background: rgba(255, 255, 255, ${(card.opacity / 100).toFixed(2)});\n  `

		const borderColor = card.dark
			? `rgba(78, 205, 196, ${card.borderOpacity / 100})`
			: `rgba(255, 255, 255, ${card.borderOpacity / 100})`

		return `.glass-card-${card.id} {
  ${gradientCode}backdrop-filter: blur(${card.blur}px);
  -webkit-backdrop-filter: blur(${card.blur}px);
  border: 1px solid ${borderColor};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 25px;
  transition: all 0.3s ease;
}

.glass-card-${card.id}:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, ${((card.borderOpacity / 100) * 1.5).toFixed(2)});
}`
	}

	const handleShowCode = (title, code, language = 'css', fileName) => {
		setModalContent({
			title: title,
			code: code,
			language: language,
			fileName:
				fileName ||
				`${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.${language}`,
		})
		setIsModalOpen(true)
	}

	const handleDownloadCode = (code, fileName) => {
		const blob = new Blob([code], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.download = fileName
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		URL.revokeObjectURL(url)
	}

	// Функция для получения стилей карточки
	const getCardStyle = card => {
		const blurValue = blurLevel * (card.blur / 10)
		const opacityValue = (opacityLevel * (card.opacity / 10)) / 100
		const borderOpacityValue = (borderOpacity * (card.borderOpacity / 20)) / 100

		const background = card.gradient
			? `linear-gradient(135deg, 
        rgba(255, 255, 255, ${opacityValue}), 
        rgba(255, 255, 255, ${opacityValue * 0.5}))`
			: card.dark
				? `rgba(30, 30, 46, ${opacityValue})`
				: `rgba(255, 255, 255, ${opacityValue})`

		const borderColor = card.dark
			? `rgba(78, 205, 196, ${borderOpacityValue})`
			: `rgba(255, 255, 255, ${borderOpacityValue})`

		return {
			background: background,
			backdropFilter: `blur(${blurValue}px)`,
			WebkitBackdropFilter: `blur(${blurValue}px)`,
			border: `1px solid ${borderColor}`,
			borderRadius: '16px',
			boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
		}
	}

	return (
		<div className='lesson-page'>
			{/* Заголовок урока */}
			<header className='lesson-header'>
				<h1 className='lesson-title'>
					<FaMagic /> Стеклянные карточки (Glassmorphism)
				</h1>
				<p className='lesson-subtitle'>
					Изучите создание современных стеклянных интерфейсов с помощью CSS
					свойства backdrop-filter
				</p>

				<div className='lesson-meta'>
					<span className='meta-item'>
						<FaCode /> CSS, UI/UX, Современные техники
					</span>
					<span className='meta-item'>
						<FaLightbulb /> 15-20 минут изучения
					</span>
				</div>
			</header>

			{/* Основной контент */}
			<div className='lesson-content glass-effect'>
				{/* Введение */}
				<section className='lesson-section'>
					<h2 className='section-title'>
						<FaLightbulb /> Что такое Glassmorphism?
					</h2>
					<p className='section-text intro-text'>
						{lessonContent.introduction}
					</p>

					<button
						className='glass-button show-code-btn'
						onClick={() =>
							handleShowCode(
								'Базовый пример Glassmorphism',
								lessonContent.codeExamples.basic,
								'css',
								'glassmorphism-basic.css',
							)
						}
					>
						<FaCode /> Показать базовый CSS код
					</button>
				</section>

				{/* Принципы */}
				<section className='lesson-section'>
					<h2 className='section-title'>
						<FaFilter /> Ключевые принципы Glassmorphism
					</h2>
					<div className='principles-grid'>
						{lessonContent.principles.map((principle, index) => (
							<div key={index} className='principle-card glass-effect'>
								<div className='principle-number'>{index + 1}</div>
								<div className='principle-content'>
									<h4 className='principle-title'>{principle.title}</h4>
									<p className='principle-description'>
										{principle.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Интерактивная демонстрация с анимированным фоном */}
				<section className='lesson-section'>
					<h2 className='section-title'>
						<FaSlidersH /> Интерактивная демонстрация
					</h2>
					<p className='section-text demo-description'>
						Ниже представлены различные варианты стеклянных карточек.
						Используйте слайдеры для настройки параметров и получите готовый CSS
						код для любого элемента.
					</p>

					{/* Анимированный фон для демонстрации */}
					<div className='demo-background'>
						<div className='background-elements'>
							<div className='bg-circle circle-1'></div>
							<div className='bg-circle circle-2'></div>
							<div className='bg-circle circle-3'></div>
						</div>

						<div className='demo-content'>
							{/* Панель управления */}
							<div className='demo-controls glass-effect'>
								<h3 className='controls-title'>
									<FaSlidersH /> Настройки эффектов
								</h3>

								<div className='controls-grid'>
									<div className='control-group'>
										<label>
											<FaCss3Alt /> Уровень блюра:{' '}
											<span className='control-value'>{blurLevel}px</span>
										</label>
										<input
											type='range'
											min='0'
											max='50'
											value={blurLevel}
											onChange={e => setBlurLevel(e.target.value)}
											className='range-slider'
										/>
										<div className='range-labels'>
											<span>Мин</span>
											<span>Макс</span>
										</div>
									</div>

									<div className='control-group'>
										<label>
											<FaCss3Alt /> Непрозрачность:{' '}
											<span className='control-value'>{opacityLevel}%</span>
										</label>
										<input
											type='range'
											min='1'
											max='30'
											value={opacityLevel}
											onChange={e => setOpacityLevel(e.target.value)}
											className='range-slider'
										/>
										<div className='range-labels'>
											<span>Прозрачно</span>
											<span>Непрозрачно</span>
										</div>
									</div>

									<div className='control-group'>
										<label>
											<FaCss3Alt /> Прозрачность границы:{' '}
											<span className='control-value'>{borderOpacity}%</span>
										</label>
										<input
											type='range'
											min='5'
											max='50'
											value={borderOpacity}
											onChange={e => setBorderOpacity(e.target.value)}
											className='range-slider'
										/>
										<div className='range-labels'>
											<span>Прозрачная</span>
											<span>Непрозрачная</span>
										</div>
									</div>
								</div>
							</div>

							{/* Демо карточки */}
							<div className='demo-cards'>
								<h3 className='cards-title'>
									<FaCode /> Примеры стеклянных карточек
								</h3>

								<div className='cards-grid'>
									{demoCards.map(card => (
										<div key={card.id} className='demo-card-wrapper'>
											<div
												className={`demo-card glass-effect card-${card.id}`}
												style={getCardStyle(card)}
											>
												<div className='card-header'>
													<div className='card-icon'>{card.icon}</div>
													<h4 className='card-title'>{card.title}</h4>
												</div>
												<p className='card-description'>{card.description}</p>
												<div className='card-footer'>
													<span className='blur-value'>
														Размытие: {card.blur}px
													</span>
													<span className='card-tag'>{card.tag}</span>
												</div>
											</div>

											<button
												className='glass-button get-code-btn'
												onClick={() =>
													handleShowCode(
														`Карточка: ${card.title}`,
														generateCardCode(card),
														'css',
														`glass-card-${card.id}.css`,
													)
												}
											>
												<FaCode /> Получить CSS код
											</button>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Преимущества */}
				<section className='lesson-section'>
					<h2 className='section-title'>
						<FaLightbulb /> Преимущества Glassmorphism
					</h2>
					<div className='benefits-grid'>
						{lessonContent.benefits.map((benefit, index) => (
							<div key={index} className='benefit-card glass-effect'>
								<div className='benefit-icon'>{index + 1}</div>
								<p className='benefit-text'>{benefit}</p>
							</div>
						))}
					</div>
				</section>

				{/* Примеры кода */}
				<section className='lesson-section'>
					<h2 className='section-title'>
						<FaCode /> Примеры готового кода
					</h2>

					<div className='code-examples'>
						<div className='code-example glass-effect'>
							<h3>Базовый пример</h3>
							<pre className='code-block'>
								<code>{lessonContent.codeExamples.basic}</code>
							</pre>
							<div className='code-actions'>
								<button
									className='glass-button small'
									onClick={() =>
										handleShowCode(
											'Базовый CSS Glassmorphism',
											lessonContent.codeExamples.basic,
											'css',
											'glass-card-basic.css',
										)
									}
								>
									<FaCopy /> Показать полный код
								</button>
								<button
									className='glass-button small'
									onClick={() =>
										handleDownloadCode(
											lessonContent.codeExamples.basic,
											'glass-card-basic.css',
										)
									}
								>
									<FaDownload /> Скачать CSS
								</button>
							</div>
						</div>

						<div className='code-example glass-effect'>
							<h3>Продвинутый пример с градиентом</h3>
							<pre className='code-block'>
								<code>{lessonContent.codeExamples.advanced}</code>
							</pre>
							<div className='code-actions'>
								<button
									className='glass-button small'
									onClick={() =>
										handleShowCode(
											'Продвинутый CSS Glassmorphism',
											lessonContent.codeExamples.advanced,
											'css',
											'glass-card-advanced.css',
										)
									}
								>
									<FaCopy /> Показать полный код
								</button>
								<button
									className='glass-button small'
									onClick={() =>
										handleDownloadCode(
											lessonContent.codeExamples.advanced,
											'glass-card-advanced.css',
										)
									}
								>
									<FaDownload /> Скачать CSS
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Практическое задание */}
				<section className='lesson-section challenge-section glass-effect'>
					<h2 className='section-title'>
						<FaCode /> Практическое задание
					</h2>
					<div className='challenge-content'>
						<p className='challenge-description'>
							Создайте свою стеклянную карточку с использованием следующих
							параметров:
						</p>
						<ul className='challenge-requirements'>
							<li>Размытие фона: 15px</li>
							<li>Прозрачность: 12% (rgba(255, 255, 255, 0.12))</li>
							<li>Стеклянная граница: 1px solid rgba(255, 255, 255, 0.3)</li>
							<li>Закругление углов: 16px</li>
							<li>Добавьте внутреннее свечение с помощью inset box-shadow</li>
							<li>Создайте эффект при наведении (hover effect)</li>
						</ul>

						<div className='challenge-actions'>
							<button
								className='glass-button challenge-btn'
								onClick={() =>
									handleShowCode(
										'Решение практического задания',
										`.your-glass-card-solution {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  padding: 25px;
  transition: all 0.3s ease;
}

.your-glass-card-solution:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}`,
										'css',
										'glass-card-solution.css',
									)
								}
							>
								<FaCode /> Показать решение
							</button>

							<button
								className='glass-button hint-btn'
								onClick={() =>
									handleShowCode(
										'Подсказка для задания',
										`/* Подсказка: используйте комбинацию свойств */
/* 
1. backdrop-filter - для размытия
2. background с rgba - для прозрачности
3. border с rgba - для стеклянной границы
4. box-shadow с inset - для внутреннего свечения
5. :hover - для эффекта при наведении
*/`,
										'css',
										'glass-card-hint.css',
									)
								}
							>
								<FaLightbulb /> Подсказка
							</button>
						</div>
					</div>
				</section>

				{/* Советы по использованию */}
				<section className='lesson-section tips-section glass-effect'>
					<h2 className='section-title'>
						<FaFont /> Советы по работе с текстом
					</h2>
					<div className='tips-content'>
						<p className='tip-text'>
							При увеличении уровня блюра контраст между текстом и фоном
							уменьшается. Используйте эти рекомендации для сохранения
							читаемости:
						</p>

						<div className='tips-grid'>
							<div className='tip-card-large glass-effect'>
								<h4>Высокий контраст</h4>
								<p>
									Используйте белый текст на темном фоне или темный текст на
									светлом фоне для максимальной читаемости.
								</p>
							</div>

							<div className='tip-card-large glass-effect'>
								<h4>Тени для текста</h4>
								<p>
									Добавляйте text-shadow для улучшения читаемости на сложных
									фонах и при сильном размытии.
								</p>
							</div>

							<div className='tip-card-large glass-effect'>
								<h4>Жирное начертание</h4>
								<p>
									Используйте font-weight: 600-700 для основного текста,
									особенно на мобильных устройствах.
								</p>
							</div>

							<div className='tip-card-large glass-effect'>
								<h4>Достаточный размер</h4>
								<p>
									Минимальный размер текста — 16px для мобильных устройств, 14px
									для десктопов.
								</p>
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

export default GlassCardsLesson
