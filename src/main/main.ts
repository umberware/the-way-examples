import { Application, TheWayApplication } from '@umberware/the-way';

@Application()
export class Main extends TheWayApplication {
    public start(): void {
        console.log('Hello World')
    }
}
