import { Injectable, UnauthorizedException } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class GoogleTokenVerify {
  async validate(accessToken: string) {
    try {
      // Verificar o token com o Google
      await axios.get(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`,
      )

      //  Obter informações do usuário
      const userInfoResponse = await axios.get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`,
      )
      const userInfo = userInfoResponse.data

      return {
        googleId: userInfo.id,
        email: userInfo.email,
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid access token')
    }
  }
}
