import React, { useEffect, useState } from 'react'
import {
	FaTimes,
	FaCopy,
	FaDownload,
	FaCheck,
	FaFileCode,
} from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './CodeModal.css'

const CodeModal = ({
	isOpen,
	onClose,
	title,
	code,
	language = 'css',
	fileName,
}) => {
	const [copied, setCopied] = useState(false)

	// Блокируем скролл при открытии модального окна
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	// Закрытие по Escape
	useEffect(() => {
		const handleEscape = e => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [isOpen, onClose])

	if (!isOpen) return null

	const handleCopy = () => {
		navigator.clipboard.writeText(code).then(() => {
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		})
	}

	const handleDownload = () => {
		const blob = new Blob([code], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.download = fileName || `code.${language}`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		URL.revokeObjectURL(url)
	}

	// Функция для определения языка для подсветки синтаксиса
	const getSyntaxLanguage = () => {
		switch (language.toLowerCase()) {
			case 'html':
				return 'html'
			case 'jsx':
				return 'jsx'
			case 'javascript':
			case 'js':
				return 'javascript'
			case 'css':
				return 'css'
			default:
				return 'css'
		}
	}

	return (
		<>
			<div className='code-modal-overlay' onClick={onClose} />
			<div className='code-modal'>
				<div className='modal-content glass-effect'>
					<div className='modal-header'>
						<div className='header-left'>
							<FaFileCode className='header-icon' />
							<div className='header-text'>
								<h3 className='modal-title'>{title}</h3>
								<div className='file-info'>
									<span className='language-badge'>
										{language.toUpperCase()}
									</span>
									<span className='file-name'>
										{fileName || `code.${language}`}
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className='modal-body'>
						<SyntaxHighlighter
							language={getSyntaxLanguage()}
							style={vscDarkPlus}
							customStyle={{
								margin: 0,
								borderRadius: '8px',
								fontSize: '14px',
								lineHeight: '1.5',
								background: 'rgba(0, 0, 0, 0.3)',
							}}
							lineProps={{
								style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
							}}
							wrapLines={true}
						>
							{code}
						</SyntaxHighlighter>
					</div>

					<div className='modal-footer'>
						<button
							className={`glass-button copy-btn ${copied ? 'copied' : ''}`}
							onClick={handleCopy}
						>
							{copied ? <FaCheck /> : <FaCopy />}
							{copied ? 'Скопировано!' : 'Копировать'}
						</button>

						<button
							className='glass-button download-btn'
							onClick={handleDownload}
						>
							<FaDownload /> Скачать
						</button>

						<button className='glass-button close-btn' onClick={onClose}>
							<FaTimes /> Закрыть
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CodeModal
