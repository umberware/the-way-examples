import { Inject } from '@umberware/the-way';
import { InjectionA } from './injection-a';

export class InjectionB {
    @Inject() injecionA: InjectionB;
}
