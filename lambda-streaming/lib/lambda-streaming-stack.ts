import {
  aws_lambda_nodejs as Nodejs,
  CfnOutput,
  aws_lambda as lambda,
  Stack,
  StackProps,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";

export class LambdaStreamingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fn = new Nodejs.NodejsFunction(this, "MyFunction", {
      entry: path.join(__dirname, "..", "index.ts"),
      handler: "index.handler",
    });

    const fnUrl = fn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      invokeMode: lambda.InvokeMode.RESPONSE_STREAM,
    });

    new CfnOutput(this, "Function ARN", {
      value: fn.functionArn,
    });

    new CfnOutput(this, "Function URL", {
      value: fnUrl.url,
    });
  }
}
