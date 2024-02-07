import { Module } from '@nestjs/common'
import { AuthorizationGuard } from './authorization.guard'
import { GoogleTokenVerify } from './google-token-verify.service'

@Module({
  providers: [AuthorizationGuard, GoogleTokenVerify],
  exports: [AuthorizationGuard, GoogleTokenVerify],
})
export class AuthModule {}
