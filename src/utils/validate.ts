import {INote} from '@/store/types';

export const validateCanSubmitCreateNote = (note: INote) => {
	if (note.id === '' || note.title === '') {
        return false;
    }
    return true;
};
