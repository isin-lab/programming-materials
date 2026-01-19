import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import AppRoutes from './routes/AppRoutes'

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/*' element={<AppRoutes />} />
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
