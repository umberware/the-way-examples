import { TheWayApplication, Application, Inject } from '@nihasoft/the-way';
import { HeroRest} from './hero/hero.rest';
import { UserRest } from './user/user.rest';

@Application()
export class Main extends TheWayApplication {

    @Inject() heroRest: HeroRest;
    @Inject() userRest: UserRest;

    public start(): void {
        console.log('I\'m ready.');
    }
}