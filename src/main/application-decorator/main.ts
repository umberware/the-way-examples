import { TheWayApplication, Application } from '@nihasoft/the-way';

@Application()
export class Main extends TheWayApplication {

    public start(): void {
        console.log('I\'m ready.');
    }
}