import { TheWayApplication, Application, Inject } from '@nihasoft/the-way'
import { InjectionExample } from './injection-example';
import { HereRest } from './hero.rest';

@Application()
export class Main extends TheWayApplication {

    @Inject() injectionExample: InjectionExample;
    @Inject() heroRest: HereRest;

    public start(): void {
        this.injectionExample.helloWorld();
    }
}