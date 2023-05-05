import type { SSTConfig } from 'sst';
import { AstroSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'allangaleracom',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, 'site', {
        customDomain: 'allangalera.com',
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
