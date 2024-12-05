/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'allangalera-personal',
      removal: 'remove',
      home: 'aws',
    };
  },
  async run() {
    new sst.aws.Astro('MyWeb', {
      domain: 'allangalera.com',
    });
  },
});
