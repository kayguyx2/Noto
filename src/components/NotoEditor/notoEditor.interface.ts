import { INote, IUpdateNote, IUpdateNoteBody, IUpdateNoteId, IUpdateNoteTitle } from "@/store/types";

export interface NotoEditorProps {
    noteId: string;
    title: string;
    body: string;
    updateNote: (payload: INote) => IUpdateNote;
    onUpdateNoteId: (id: string | number[]) => IUpdateNoteId;
    onUpdateNoteTitle: (title: string) => IUpdateNoteTitle;
    onUpdateNoteBody: (body: string) => IUpdateNoteBody;
}