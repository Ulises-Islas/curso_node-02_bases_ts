import { buildLogger, logger as wLogger } from '../../src/plugins/logger.plugin';

describe('buildLogger', () => {
    test('should return a function logger', () => {
        const logger = buildLogger('test');
        expect( typeof logger.log ).toBe('function');
        expect( typeof logger.error ).toBe('function');
    });

    test('logger.log should log a message', () => {
        const winstonLoggerMock = jest.spyOn(wLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);
        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service,
            }),
        );
    });
});