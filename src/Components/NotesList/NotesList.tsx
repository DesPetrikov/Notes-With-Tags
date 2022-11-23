import React from 'react';
import { NoteDataType } from '../App/App';
import { Note } from '../Note/Note';
import styles from './NotesList.module.scss';

export type NotesListType = {
	notesList: (NoteDataType & {id: number})[]
}

export const NotesList: React.FC<NotesListType> = ({notesList}) => {
  return (
    <ul className={styles.wrapper}>
     {notesList.map(note => <Note noteData={note}/>)}
    </ul>
  );
};
