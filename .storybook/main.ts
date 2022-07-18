

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal( config ) {
    const react = require("@vitejs/plugin-react");
    config.plugins = [
      ...config.plugins.filter((plugin) => {
        return !(
          Array.isArray(plugin) && plugin[0].name  === "vite:react-babel"
        );
      }),
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        babel: {
          plugins: [
            'babel-plugin-macros',
            [
              '@emotion/babel-plugin-jsx-pragmatic',
              {
                export: 'jsx',
                import: '__cssprop',
                module: '@emotion/react',
              },
            ],
            [
              '@babel/plugin-transform-react-jsx',
              { pragma: '__cssprop' },
              'twin.macro',
            ],
          ],
        },
      }),
      
    ];
    config.esbuild = {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    }

    return config;
  },
  "features": {
    "storyStoreV7": true
  }
}