import { Application, TheWayApplication, Inject, CoreLogger, CoreMessageService } from '@umberware/the-way';

@Application()
export class Main extends TheWayApplication {
    /*
        It's not necessary inject CustomMessagesConfiguration, because is decorated with @Configuration and the file scan is enabled
        for this example, so, will automatic configure the CORE_MESSAGES with the new languages
    */
    @Inject logger: CoreLogger;

    public start(): void {
        this.logger.info(CoreMessageService.getMessage('hello-world'));
        CoreMessageService.setLanguage('pt');
        this.logger.info(CoreMessageService.getMessage('hello-world'));
        CoreMessageService.setLanguage('es')
        this.logger.info(CoreMessageService.getMessage('hello-world'));
    }
}

