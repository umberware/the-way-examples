import { TheWayApplication, Application, Inject } from '@nihasoft/the-way'
import { InjectionExample } from './injection-example';
import { HeroRest
 } from './hero.rest';

@Application()
export class Main extends TheWayApplication {

    @Inject() injectionExample: InjectionExample;
    @Inject() heroRest: HeroRest
;

    public start(): void {
        this.injectionExample.helloWorld();
    }
}