import { CoreSecurityService, Inject, Post, Rest } from '@umberware/the-way';

@Rest('/sign')
export class SignRest {
    @Inject coreSecurity: CoreSecurityService;

    @Post('/in')
    public signIn(): string {
        return this.coreSecurity.generateToken(undefined);
    }
}
