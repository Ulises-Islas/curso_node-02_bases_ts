import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template', () => {
    test('emailTemplate should contain a greeting', () => {
        expect(emailTemplate).toContain('Hi, ');
    });

    test('emailTemplate should contain {{name}} and {{orderID}}', () => {
        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderID}}');
    });
});