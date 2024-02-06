import 'next-auth'

declare module 'next-auth' {
  /**
   * Extende os atributos da sessão
   */
  interface Session {
    accessToken?: string
    sub?: string
  }
}
