import { httpClient } from "../../src/plugins";

describe('httpClient', () => {
    test('httpClient.get() should return a string', async () => {
        const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: expect.any(String),
            completed: expect.any(Boolean)
        });
    });

    test('httpClient should have post, put and delete methods', () => {
        expect(httpClient.post).toBeDefined();
        expect(typeof httpClient.post).toBe('function');

        expect(httpClient.put).toBeDefined();
        expect(typeof httpClient.put).toBe('function');
        
        expect(httpClient.delete).toBeDefined();
        expect(typeof httpClient.delete).toBe('function');
    });
});