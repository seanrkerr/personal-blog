import { aws_appconfig as appconfig } from "aws-cdk-lib";
import { Construct } from "constructs";

export type APHostedConfigProps = {
  appId: appconfig.CfnApplication;
  profile: appconfig.CfnConfigurationProfile;
  content: object;
  description: string;
};

export default class APHostedConfig extends appconfig.CfnHostedConfigurationVersion {
  constructor(scope: Construct, props: APHostedConfigProps) {
    super(scope, "APHostedConfig", {
      applicationId: props.appId.ref,
      configurationProfileId: props.profile.ref,
      content: JSON.stringify(props.content),
      contentType: "application/json",
      description: props.description,
    });
  }
}
