import { onGenerateId } from "../generate";

describe('Test generate id', () => {
    test('If data is correct', () => {
        const expectData = true;
        const result = onGenerateId();
        expect(expectData).toBe(typeof result === "string");
	});
});