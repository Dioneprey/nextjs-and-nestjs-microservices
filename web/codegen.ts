import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  // ...
  schema: 'http://localhost:3332/graphql',
  generates: {
    'src/app/graphql/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
      },
    },
  },
}
export default config
