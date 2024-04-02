import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('05-factory', () => {

    const getUUID = () => '1234';
    const getAge = () => 23;

    test('buildMakePerson should return a function', (done) => {
        const makePerson = buildMakePerson({ getUUID, getAge });

        expect(typeof makePerson).toBe('function');
        done();
    });

    test('makePerson should return a person', (done) => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        const johnDoe = makePerson({ name: 'John Doe', birthdate: '2001-01-18' });

        expect(johnDoe).toEqual({ id: '1234', name: 'John Doe', birthdate: '2001-01-18', age: 23 });
        done();
    })
});