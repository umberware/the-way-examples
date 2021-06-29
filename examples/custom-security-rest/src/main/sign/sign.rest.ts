import {
    BadRequestException,
    BodyParam,
    Claims,
    CoreLogger,
    CoreSecurityService,
    Get,
    Inject,
    Post,
    Rest,
    TokenClaims
} from '@umberware/the-way';

import { SignModel } from './model/sign.model';

@Rest( '/sign')
export class SignRest {
    /*
    *   The CustomCoreSecurityService override the CoreSecurityService, so the injected instance will be a CustomCoreSecurityService
    */
    @Inject coreSecurity: CoreSecurityService;
    @Inject logger: CoreLogger;

    @Post('in')
    public signIn(@BodyParam sign: SignModel): string {
        if (!sign.password || !sign.username) {
            throw new BadRequestException('Username or Password is invalid');
        }
        return this.coreSecurity.generateToken({ username: sign.username });
    }
    @Get('verify', true)
    public verifyToken(@Claims tokenClaims: TokenClaims): boolean {
        this.logger.info(tokenClaims.username);
        return true;
    }
}
