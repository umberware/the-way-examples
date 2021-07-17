import { CoreLogger, CoreSecurityService, Inject, Service, TokenClaims } from '@umberware/the-way';

@Service(CoreSecurityService)
export class CustomCoreSecurityService extends CoreSecurityService {
    @Inject logger: CoreLogger;
    /**
     * You can customize these methods to implement your user authenticity mechanisms.
     * Changing the default JWT to an OAUTH or another
     * */
    public generateToken(tokenClaims: TokenClaims | undefined): string {
        this.logger.info('My Custom Security Service Generate Token');
        return super.generateToken(tokenClaims);
    }
    public verifyAuthentication(token?: string, allowedFatherPathProfiles?: Array<any>, profiles?: Array<any>): TokenClaims | undefined {
        this.logger.info('My Custom Security Service Authentication Verification');
        return super.verifyAuthentication(token, allowedFatherPathProfiles, profiles);
    }
}
