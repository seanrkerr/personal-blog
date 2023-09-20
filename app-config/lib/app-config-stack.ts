import { Stack, StackProps, aws_appconfig as appconfig } from "aws-cdk-lib";
import { Construct } from "constructs";
import APApplication from "./APApplication";
import APEnvironment from "./APEnvironment";
import APConfigurationProfile from "./APConfigurationProfile";
import APHostedConfig from "./APHostedConfig";
import APDeploymentStrategy from "./APDeploymentStrategy";
import APDeploymentConfig from "./APDeploymentConfig";

export class AppConfigStack extends Stack {
  private app: appconfig.CfnApplication;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.app = new APApplication(this, {
      appId: "My Cool Config",
      appName: "My Cool App",
      description: "My Cool Description",
    });

    const env = new APEnvironment(this, {
      appId: this.app,
      env: "My Cool Env",
    });

    const configProfile = new APConfigurationProfile(this, {
      appId: this.app,
      locationUri: "hosted",
      name: "My Cool Config Profile",
    });

    const theConfig = { key: "value" };

    const hostedConfig = new APHostedConfig(this, {
      appId: this.app,
      profile: configProfile,
      content: theConfig,
      description: "My Cool Hosted config",
    });

    const deploymentStrategy = new APDeploymentStrategy(this, {
      deploymentDurationInMinutes: 1,
      growthFactor: 50,
      name: "Deployment strategy",
      replicateTo: "NONE",
      description: "My Cool Deployment Strategy for my domain",
      finalBakeTimeInMinutes: 1,
      growthType: "LINEAR",
    });

    const deployment = new APDeploymentConfig(this, {
      appId: this.app,
      profile: configProfile,
      hostedConfig: hostedConfig,
      deploymentStrategy: deploymentStrategy,
      environmentId: env,
      description: "My Cool Deployment",
    });
  }
}
