import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export interface CdkExampleLambdaWithLayerProps {
  myMessage?: string
}

export class CdkExampleLambdaWithLayer extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: CdkExampleLambdaWithLayerProps = {}) {
    super(scope, id);

    new lambda.Function(this, 'myHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '..', 'lambda')),
      handler: 'index.handler',
      environment: { MY_MESSAGE: props.myMessage || 'Hello' },
    });
  }
}
