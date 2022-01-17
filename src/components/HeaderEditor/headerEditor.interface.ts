import {
    INote,
    IUpdateNoteCreateAt,
    IUpdateNoteStatusArchive,
    IUpdateNoteStatusFavorite,
    IUpdateNoteUpdateAt,
} from '@/store/types';
import {AppRootParamList} from '@/types/navigation';
import {NavigationProp} from '@react-navigation/native';

export interface HeaderEditorProps {
    note: INote;
    onCreateNewNote: (nav: NavigationProp<AppRootParamList>) => void;
    onResetNote: () => void;
    onUpdateNoteCreateAt: (datetime: string) => IUpdateNoteCreateAt;
    onUpdateNoteUpdateAt: (datetime: string) => IUpdateNoteUpdateAt;
    onUpdateNoteStatusFavorite: (status: boolean) => IUpdateNoteStatusFavorite;
    onUpdateNoteStatusArchive: (status: boolean) => IUpdateNoteStatusArchive;
}
