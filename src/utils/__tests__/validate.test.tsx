import {validateCanSubmitCreateNote} from '../validate';

describe('Test validate can submit create note', () => {
    test('Note state has data', () => {
        const expectData = true;
        const note = {
            id: 'TEST001',
            title: 'TEST001',
            body: '<div>TEST001<div>',
            created_at: '2022-01-17T17:41:35+07:00',
            updated_at: '2022-01-17T17:41:35+07:00',
            is_favorite: false,
            is_archived: false,
        };
        const result = validateCanSubmitCreateNote(note);
        expect(expectData).toBe(result);
    });

    test('Note state not has data', () => {
        const expectData = false;
        const note = {
            id: '',
            title: '',
            body: '',
            created_at: '',
            updated_at: '',
            is_favorite: false,
            is_archived: false,
        };
        const result = validateCanSubmitCreateNote(note);
        expect(expectData).toBe(result);
    });

    test('Note state not has body', () => {
        const expectData = true;
        const note = {
            id: 'TEST001',
            title: 'TEST001',
            body: '',
            created_at: '2022-01-17T17:41:35+07:00',
            updated_at: '2022-01-17T17:41:35+07:00',
            is_favorite: false,
            is_archived: false,
        };
        const result = validateCanSubmitCreateNote(note);
        expect(expectData).toBe(result);
    });
});
