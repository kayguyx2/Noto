import {INote} from '@/store/types';

export const removeNoteById = (
    lists: Array<INote>,
    noteId: string,
): Array<INote> | [] => {
    const array = [...lists];
    const index = array.findIndex(note => note.id === noteId);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
};
