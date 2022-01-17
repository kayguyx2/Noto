import moment from 'moment';
import {
    insertOrUpdateNote,
    removeNoteById,
    sortListsNoteByUpdateAt,
    updateNoteFavoriteById,
} from '../core';

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

describe('Test remove note', () => {
    test('Remove note when the list have one note.', () => {
        const expectData = [];
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

        const noteId = 'TEST001';
        const result = removeNoteById(noteList, noteId);

        expect(expectData).toStrictEqual(result);
    });

    test('Remove note when the list have multiple note.', () => {
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

        const noteId = 'TEST002';
        const result = removeNoteById(noteList, noteId);

        expect(expectData).toStrictEqual(result);
    });

    test('Remove note when the list have multiple note and not last index.', () => {
        const expectData = [
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

        const noteId = 'TEST001';
        const result = removeNoteById(noteList, noteId);

        expect(expectData).toStrictEqual(result);
    });
});

describe('Test update note favorite by id', () => {
    test('Update status note in fist index of lists', () => {
        const expectData = [
            {
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: moment().format(),
                is_favorite: true,
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
            {
                id: 'TEST003',
                title: 'TEST003',
                body: '<div>TEST003<div>',
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
            {
                id: 'TEST002',
                title: 'TEST002',
                body: '<div>TEST002<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
            {
                id: 'TEST003',
                title: 'TEST003',
                body: '<div>TEST003<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const noteId = 'TEST001';
        const status = true;
        const result = updateNoteFavoriteById(noteId, noteList, status);

        expect(expectData).toStrictEqual(result);
    });

    test('Update status note in last index of lists', () => {
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
            {
                id: 'TEST003',
                title: 'TEST003',
                body: '<div>TEST003<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: moment().format(),
                is_favorite: true,
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
            {
                id: 'TEST002',
                title: 'TEST002',
                body: '<div>TEST002<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
            {
                id: 'TEST003',
                title: 'TEST003',
                body: '<div>TEST003<div>',
                created_at: '2022-01-17T17:41:35+07:00',
                updated_at: '2022-01-17T17:41:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const noteId = 'TEST003';
        const status = true;
        const result = updateNoteFavoriteById(noteId, noteList, status);

        expect(expectData).toStrictEqual(result);
    });
});

describe('Test sort note lists', () => {
    test('Sort multiple note in list', () => {
		const expectData = [
			{
                id: 'TEST003',
                title: 'TEST003',
                body: '<div>TEST003<div>',
                created_at: '2022-01-17T17:30:35+07:00',
                updated_at: '2022-01-17T17:30:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
            {
                id: 'TEST002',
                title: 'TEST002',
                body: '<div>TEST002<div>',
                created_at: '2022-01-17T17:20:35+07:00',
                updated_at: '2022-01-17T17:20:35+07:00',
                is_favorite: false,
                is_archived: false,
			},
			{
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:10:35+07:00',
                updated_at: '2022-01-17T17:10:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
       
        ];

        const noteList = [
            {
                id: 'TEST002',
                title: 'TEST002',
                body: '<div>TEST002<div>',
                created_at: '2022-01-17T17:20:35+07:00',
                updated_at: '2022-01-17T17:20:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
            {
                id: 'TEST003',
                title: 'TEST003',
                body: '<div>TEST003<div>',
                created_at: '2022-01-17T17:30:35+07:00',
                updated_at: '2022-01-17T17:30:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
            {
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:10:35+07:00',
                updated_at: '2022-01-17T17:10:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const result = sortListsNoteByUpdateAt(noteList);
        expect(expectData).toStrictEqual(result);
	});
	
    test('Sort single note in list', () => {
		const expectData = [
			{
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:10:35+07:00',
                updated_at: '2022-01-17T17:10:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
       
        ];

        const noteList = [
            {
                id: 'TEST001',
                title: 'TEST001',
                body: '<div>TEST001<div>',
                created_at: '2022-01-17T17:10:35+07:00',
                updated_at: '2022-01-17T17:10:35+07:00',
                is_favorite: false,
                is_archived: false,
            },
        ];

        const result = sortListsNoteByUpdateAt(noteList);
        expect(expectData).toStrictEqual(result);
    });
});
