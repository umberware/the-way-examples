import { TheWayApplication, Application } from '@nihasoft/the-way';

@Application({
    automatic: false
})
export class Main extends TheWayApplication {

    public start(): void {
        console.log('I\'m ready.');
    }
}
new Main();