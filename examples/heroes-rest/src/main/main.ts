import { Application, TheWayApplication, Inject, CoreLogger } from '@umberware/the-way';

@Application()
export class Main extends TheWayApplication {
    @Inject logger: CoreLogger;

    public start(): void {
        this.logger.info('Heroes on the WAY!');
    }
}

