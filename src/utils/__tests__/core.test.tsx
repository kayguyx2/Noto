import { removeNote } from '@/store/middlewares/thunks/thunkLists';
import {insertOrUpdateNote} from '../core';

describe('Test insert or update note', () => {
    test('Add note when the lists has note.', () => {
        const expectData = [
            {
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
            {
                id: 'TEST002',
                title: 'TEST002',
                body: '<div>TEST002<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const noteList = [
            {
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const note = {
            id: 'TEST002',
            title: 'TEST002',
            body: '<div>TEST002<div>',
            created_at: '2022-01-17T17:41:35+07:00',
            updated_at: '2022-01-17T17:41:35+07:00',
            is_favorite: false,
            is_archived: false,
        };

        const noteId = 'TEST002';
        const result = insertOrUpdateNote(noteList, note, noteId);
        expect(expectData).toStrictEqual(result);
    });

    test('Add note when the lists has no note.', () => {
        const expectData = [
            {
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const noteList = [];

        const note = {
            id: 'TEST001',
            title: 'TEST001',
            body: '<div>TEST001<div>',
            created_at: '2022-01-17T17:41:35+07:00',
            updated_at: '2022-01-17T17:41:35+07:00',
            is_favorite: false,
            is_archived: false,
        };

        const noteId = 'TEST001';
        const result = insertOrUpdateNote(noteList, note, noteId);
        expect(expectData).toStrictEqual(result);
    });

    test('Update note when the lists has note.', () => {
        const expectData = [
            {
                id: 'TEST001',
                title: 'TEST001-UPDATE',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const noteList = [
            {
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const note = {
            id: 'TEST001',
            title: 'TEST001-UPDATE',
            body: '<div>TEST001<div>',
            created_at: '2022-01-17T17:41:35+07:00',
            updated_at: '2022-01-17T17:41:35+07:00',
            is_favorite: false,
            is_archived: false,
        };

        const noteId = 'TEST001';
        const result = insertOrUpdateNote(noteList, note, noteId);
        expect(expectData).toStrictEqual(result);
    });
});

// describe('Test remove note', () => {
//     test('Remove note when the list have one note.', () => {
//         const expectData = [];
//         const noteList = [
//             {
//                 id: 'TEST001',
//                 title: 'TEST001',
//                 body: '<div>TEST001<div>',
//                 created_at: '2022-01-17T17:41:35+07:00',
//                 updated_at: '2022-01-17T17:41:35+07:00',
//                 is_favorite: false,
//                 is_archived: false,
//             },
//         ];

//         const noteId = 'TEST001';
// 		const result = removeNote(noteId);
		
//         expect(expectData).toStrictEqual(result);
//     });
// });
