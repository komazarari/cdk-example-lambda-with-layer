import { expect as expectCDK, haveResource, SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import CdkExampleLambdaWithLayer = require('../lib/index');

test('Lambda Created', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "TestStack");
    // WHEN
    new CdkExampleLambdaWithLayer.CdkExampleLambdaWithLayer(stack, 'MyTestConstruct');
    // THEN
    expectCDK(stack).to(haveResource("AWS::Lambda::Function"));
});
