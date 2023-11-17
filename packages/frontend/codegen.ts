import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../../schema.graphql",
  documents: ["src/**/**/*.gql.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    },
  },
};

export default config;
