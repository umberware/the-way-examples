import { ServerConfiguration, Configuration } from '@nihasoft/the-way';
import { Observable } from 'rxjs';

@Configuration(ServerConfiguration)
export class CustomServerConfiguration extends ServerConfiguration {
    public configure(): Observable<boolean> {
        this.port = 12345;
        return this.start();
    }
}