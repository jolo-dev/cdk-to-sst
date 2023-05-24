import { StackContext } from 'sst/constructs/FunctionalStack'
import { CdkToSstStack } from './CdkToSstStack'

export function Main({ stack, app }: StackContext) {
  // The code that defines your stack goes here

  new CdkToSstStack(stack, 'CdkToSstStack')
}
