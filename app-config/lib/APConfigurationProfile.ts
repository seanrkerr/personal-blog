import { aws_appconfig as appconfig } from "aws-cdk-lib";
import { Construct } from "constructs";

export type APConfigurationProfileProps = {
  appId: appconfig.CfnApplication;
  locationUri: string;
  name: string;
};

export default class APConfigurationProfile extends appconfig.CfnConfigurationProfile {
  constructor(scope: Construct, props: APConfigurationProfileProps) {
    super(scope, "APConfigurationProfile", {
      applicationId: props.appId.ref,
      locationUri: props.locationUri,
      name: props.name,
    });
  }
}
