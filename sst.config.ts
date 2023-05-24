import { SSTConfig } from 'sst'
import { CdkToSstStack } from './lib/CdkToSstStack'

export default {
  config(_input) {
    return {
      name: 'cdk-to-sst',
      region: process.env.AWS_REGION ?? 'eu-central-1',
      profile: process.env.AWS_PROFILE ?? 'default'
    }
  },
  stacks(app) {
    app.stack(CdkToSstStack)
  }
} satisfies SSTConfig
