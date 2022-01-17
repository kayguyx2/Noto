import {capitalizeFirstLetter, convertStrippedHtml} from '../convert';

describe('Check convert stripped html', () => {
    test('If data is correct', () => {
        const expectData = 'first test';
        const inputData = '<div>first test</div>';
        const result = convertStrippedHtml(inputData);
        expect(expectData).toBe(result);
	});
	
    test('If data have been multiple tags', () => {
        const expectData = 'first test first test';
        const inputData = '<div>first test</div><div>first test</div>';
        const result = convertStrippedHtml(inputData);
        expect(expectData).toBe(result);
	});

    test('If data have been empty value', () => {
        const expectData = 'No addition text';
        const inputData = '';
        const result = convertStrippedHtml(inputData);
        expect(expectData).toBe(result);
	});
	
});

describe('Check capitalize first letter function', () => {
    test('If data is correct', () => {
        const expectData = 'Home';
        const inputData = 'home';
        const result = capitalizeFirstLetter(inputData);
        expect(expectData).toBe(result);
	});
	

    test('If data have been empty value', () => {
        const expectData = '';
        const inputData = '';
        const result = capitalizeFirstLetter(inputData);
        expect(expectData).toBe(result);
	});
});
