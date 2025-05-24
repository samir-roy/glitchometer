const config = {
  stories: ['../test/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;