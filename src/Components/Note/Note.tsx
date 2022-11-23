import React from 'react'
import { NoteDataType } from '../App/App'
import styles from './Note.module.scss'

export type NoteType = {
 noteData: (NoteDataType & {id: number})
}
export const Note: React.FC<NoteType> = ({noteData: {noteText}}) => {
	return (
		<li className={styles.list}>
			<h3>{noteText}</h3>
		</li>
	)
}