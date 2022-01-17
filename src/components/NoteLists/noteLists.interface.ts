import {INote} from '@/store/types';

export interface ListsNoteProps {
    noteLists: INote[];
    onRemoveNoteById: (noteId: string) => void;
    onUpdateNoteStatusFavoriteById: (noteId: string, status: boolean) => void;
}
