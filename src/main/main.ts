import { Application, TheWayApplication, Inject, Logger } from '@umberware/the-way';

@Application()
export class Main extends TheWayApplication {
    @Inject logger: Logger;

    public start(): void {
        this.logger.info('Hello World');
    }
}

