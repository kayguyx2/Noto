import {INote} from '@/store/types';

export const validateCanSubmitCreateNote = (note: INote) => {
	if (note.id === '' || note.body === '' || note.title === '') {
        return false;
    }
    return true;
};
