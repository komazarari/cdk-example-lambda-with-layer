#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkExampleLambdaWithLayer } from '../lib/index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'app', { stackName: 'lambda-with-layer'} );

new CdkExampleLambdaWithLayer(stack, 'LambdaWithLayer');