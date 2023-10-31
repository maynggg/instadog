import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../../schema.graphql",
  generates: {
    "./src/generated/resolvers-types.ts": {
      config: {
        useIndexSignature: true,
        makeResolverTypeCallable: true,
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};
export default config;
