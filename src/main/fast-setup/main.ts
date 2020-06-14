import { TheWayApplication, Application, Inject, CORE, SecurityService} from '@nihasoft/the-way'
import { InjectionExample } from './injection-example';
import { HeroRest} from './rest/hero.rest';
import { DestructableConfiguration } from './configuration/destructable.configuration';

@Application()
export class Main extends TheWayApplication {

    @Inject() injectionExample: InjectionExample;
    @Inject() heroRest: HeroRest;
    @Inject() destructable: DestructableConfiguration;

    constructor() {
        super();
        CORE.getCoreInstance().whenReady().subscribe((ready: boolean) => {
            if(ready) {
                console.log('Hi, I\'m ready.');
            }
        });
    }

    public start(): void {
        const core = CORE.getCoreInstance();
        console.log(core.getApplicationInstance());
        console.log(core.getInstanceByName<SecurityService>('SecurityService'));
        this.injectionExample.helloWorld();
        core.destroy().subscribe((destroyed: boolean) => {
            if (destroyed) {
                console.log('DIED: 1');
            }
        });
        CORE.destroyed$.subscribe((destroyed: boolean) => {
            if (destroyed) {
                console.log('DIED: 2');
            }
        });
    }
}