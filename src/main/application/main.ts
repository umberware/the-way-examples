import { TheWayApplication, Application, CORE, Inject, PropertiesHandler } from '@umberware/the-way';

@Application({
    automatic: false
})
export class Main extends TheWayApplication {

    @Inject propertiesHandler: PropertiesHandler;

    public start(): void {
        console.log('I\'m ready.');
        console.log(this.propertiesHandler.getProperties('the-way.core'))
    }
}

new Main();
