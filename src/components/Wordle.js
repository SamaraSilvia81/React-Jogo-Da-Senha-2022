import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Modal from './Modal';
import Keypad from './Keypad';

export default function Wordle({ solution }) {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn,usedKeys } = useWordle(solution);
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

		if(isCorrect) {
			setTimeout(() => setShowModal(true), 2000)
			window.removeEventListener('keyup', handleKeyup)
		}
		if(turn > 5) {
			setTimeout(() => setShowModal(true), 2000)
			window.removeEventListener('keyup', handleKeyup)
		}

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

	return (
		<div className='gridBox'>
			<Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
			<Keypad usedKeys={usedKeys} />
			{showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
		</div>
	)
}
	
