import { Inject } from '@umberware/the-way';

import { InjectionB } from './injection-b';
import { UnderworldService } from './underworld.service';

export class InjectionA {
    @Inject() underworld: UnderworldService
}
