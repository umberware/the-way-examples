import { TheWayApplication, Application, Inject } from '@nihasoft/the-way';
import { CustomServerConfiguration } from './configuration/server.configuration';
import { FooService } from './foo/foo.service';

@Application({
    custom: [
        CustomServerConfiguration
    ]
})
export class Main extends TheWayApplication {

    @Inject() fooService: FooService;

    public start(): void {
        this.fooService.print();
    }
}