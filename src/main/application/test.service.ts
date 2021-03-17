import { Service, Inject } from '@umberware/the-way';

import { InjectionA } from './injection-a';

@Service()
export class TestService {
    @Inject() test: InjectionA;
}
