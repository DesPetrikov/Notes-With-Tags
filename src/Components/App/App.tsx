import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { NoteCreator } from '../NoteCreator/NoteCreator';
import { NotesList } from '../NotesList/NotesList';
import { TagsList } from '../TagsList/TagsList';
import styles from './App.module.scss';


export type NoteDataType = {
  noteText: string;
  tags: string[];
}

export const App = () => {
  const [notesList, setNotesList] = useState<(NoteDataType & {id: number})[]>([]);

  const addNote = (note: NoteDataType) => {
    setNotesList(prev => [...prev, {...note, id: Date.now()}])
  }
  return (
    <div className={styles.wrapper}>
      <Header />
      <NoteCreator onCreateNote={addNote} />
      <TagsList />
      <NotesList notesList={notesList} />
    </div>
  );
};
