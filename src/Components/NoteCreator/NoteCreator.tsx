import React, { useState } from 'react';
import { NoteDataType } from '../App/App';
import styles from './NoteCreator.module.scss';

export type NoteCreatorType = {
	onCreateNote: (noteData: NoteDataType) => void;
}

export const NoteCreator: React.FC<NoteCreatorType> = ({onCreateNote}) => {
  const [noteData, setNoteData] = useState<NoteDataType>({ noteText: '', tags: [] });

  const findTags = (noteText: string) => {
    return noteText
      .split(' ')
      .map((word) => word.trim())
      .filter((word) => word.includes('#'))
      .map((tag) => tag.split('#').splice(1))
      .flat()
      .filter(Boolean);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const tags = findTags(value);
    setNoteData({ noteText: value, tags });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
	 onCreateNote(noteData);
	 setNoteData({ noteText: '', tags: [] })
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={submitHandler}>
        <input
          className={styles.input}
          onChange={inputHandler}
          value={noteData.noteText}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
