import { aws_appconfig as appconfig } from "aws-cdk-lib";
import { Construct } from "constructs";

export type APEnvironmentProps = {
  appId: appconfig.CfnApplication;
  env: string;
};

export default class APEnvironment extends appconfig.CfnEnvironment {
  constructor(scope: Construct, props: APEnvironmentProps) {
    super(scope, "APEnvironment", {
      applicationId: props.appId.ref,
      name: props.env,
    });
  }
}
