import {INote} from '@/store/types';

export const insertOrUpdateNote = (
    lists: Array<INote>,
    note: INote,
    noteId: string,
): Array<INote> | [] => {
    const array = [...lists];
    const index = array.findIndex(note => note.id === noteId);
    if (index !== -1) {
        array[index] = note;
        return array;
    } else {
        const newArray = [...lists, note];
        return newArray;
    }
};

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

export const updateNoteFavoriteById = (
    noteId: string,
    lists: Array<INote>,
    status: boolean,
): Array<INote> | [] => {
    const array = [...lists];
    const index = array.findIndex(note => note.id === noteId);
    if (index !== -1) {
        const tempNote = {...array[index]};
        tempNote['is_favorite'] = status;
        array[index] = tempNote;
    }
    return array;
};
