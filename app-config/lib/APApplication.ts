import { aws_appconfig as appconfig } from "aws-cdk-lib";
import { Construct } from "constructs";

export type APApplicationProps = {
  appId: string;
  appName: string;
  description: string;
};

export default class APApplication extends appconfig.CfnApplication {
  constructor(scope: Construct, props: APApplicationProps) {
    super(scope, props.appId, {
      name: props.appName,
      description: props.description,
    });
  }
}
