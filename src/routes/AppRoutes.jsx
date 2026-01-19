import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// Ленивая загрузка страниц уроков
const GlassCardsLesson = lazy(
	() => import('../pages/glass-cards/GlassCardsLesson'),
)
const AnimationsLesson = lazy(
	() => import('../pages/animations/AnimationsLesson'),
)

// Компонент заглушки для загрузки
const LoadingFallback = () => (
	<div className='loading-container glass-effect'>
		<div className='loading-spinner'></div>
		<p>Загрузка урока...</p>
	</div>
)

const AppRoutes = () => {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<Routes>
				<Route path='glass-cards' element={<GlassCardsLesson />} />
				<Route path='animations' element={<AnimationsLesson />} />
				{/* Добавьте другие маршруты по мере создания уроков */}

				{/* Заглушка для несуществующих страниц */}
				<Route
					path='*'
					element={
						<div className='not-found glass-effect'>
							<h2>Урок не найден</h2>
							<p>Возможно, этот урок еще в разработке или был перемещен.</p>
						</div>
					}
				/>
			</Routes>
		</Suspense>
	)
}

export default AppRoutes
