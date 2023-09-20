import { aws_appconfig as appconfig } from "aws-cdk-lib";
import { Construct } from "constructs";

export type APDeploymentConfigProps = {
  appId: appconfig.CfnApplication;
  profile: appconfig.CfnConfigurationProfile;
  hostedConfig: appconfig.CfnHostedConfigurationVersion;
  deploymentStrategy: appconfig.CfnDeploymentStrategy;
  environmentId: appconfig.CfnEnvironment;
  description: string;
};

export default class APDeploymentConfig extends appconfig.CfnDeployment {
  constructor(scope: Construct, props: APDeploymentConfigProps) {
    super(scope, "APDeploymentConfig", {
      applicationId: props.appId.ref,
      configurationProfileId: props.profile.ref,
      configurationVersion: props.hostedConfig.ref,
      deploymentStrategyId: props.deploymentStrategy.ref,
      environmentId: props.environmentId.ref,
      description: props.description,
    });
  }
}
