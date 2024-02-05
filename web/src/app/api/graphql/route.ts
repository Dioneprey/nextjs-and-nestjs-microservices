// import { getAccessToken } from '@auth0/nextjs-auth0'
// import httpProxyMiddleware from 'next-http-proxy-middleware'

// import type { NextApiRequest, NextApiResponse } from 'next'

// export const config = {
//   api: {
//     externalResolver: true,
//     bodyParser: true,
//   },
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   const { accessToken } = await getAccessToken() // Get access token from request context
//   console.log(accessToken)

//   return httpProxyMiddleware(req, res, {
//     target: 'http://localhost:3332/graphql',
//     changeOrigin: true,
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     pathRewrite: [
//       {
//         patternStr: '/api/graphql',
//         replaceStr: '',
//       },
//     ],
//   })
// }

import { getAccessToken } from '@auth0/nextjs-auth0'
import httpProxy from 'http-proxy'
import { NextApiRequest, NextApiResponse } from 'next'

const API_URL = process.env.API_URL // The actual URL of your API

const proxy = httpProxy.createProxyServer()

// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
}

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { accessToken } = await getAccessToken()
  return new Promise((resolve, reject) => {
    proxy.web(
      req,
      res,
      {
        target: API_URL,
        changeOrigin: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      (err) => {
        if (err) {
          return reject(err)
        }
        resolve(proxy)
      },
    )
  })
}
