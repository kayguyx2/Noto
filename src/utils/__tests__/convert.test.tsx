import {capitalizeFirstLetter, convertStrippedHtml} from '../convert';

describe('Check convert stripped html', () => {
    test('correct data', () => {
        const expectData = 'first test';
        const inputData = '<div>first test</div>';
        const result = convertStrippedHtml(inputData);
        expect(expectData).toBe(result);
	});
	
    test('multiple tags', () => {
        const expectData = 'first test first test';
        const inputData = '<div>first test</div><div>first test</div>';
        const result = convertStrippedHtml(inputData);
        expect(expectData).toBe(result);
	});

    test('empty value', () => {
        const expectData = 'No addition text';
        const inputData = '';
        const result = convertStrippedHtml(inputData);
        expect(expectData).toBe(result);
	});
	
});

describe('Check capitalize first letter function', () => {
    test('correct data', () => {
        const expectData = 'Home';
        const inputData = 'home';
        const result = capitalizeFirstLetter(inputData);
        expect(expectData).toBe(result);
	});
	

    test('empty value', () => {
        const expectData = '';
        const inputData = '';
        const result = capitalizeFirstLetter(inputData);
        expect(expectData).toBe(result);
	});
});
