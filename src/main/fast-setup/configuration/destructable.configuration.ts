import { AbstractConfiguration, Configuration } from '@nihasoft/the-way';

import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Configuration()
export class DestructableConfiguration extends AbstractConfiguration {
    public destroy(): Observable<boolean> {
        return timer(1000).pipe(
            map(() => {
                console.log('I loved this world too much...');
                return true;
            })
        );
    }
}