import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3001/graphql",
  documents: ["./**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: ["typescript", "typescript-resolvers"],
      presetConfig: {
        gqlTagName: "gql",
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
