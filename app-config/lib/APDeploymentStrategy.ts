import { aws_appconfig as appconfig } from "aws-cdk-lib";
import { Construct } from "constructs";

export type APCfnDeploymentStrategyProps = {
  deploymentDurationInMinutes: number;
  growthFactor: number;
  name: string;
  replicateTo: string;
  description: string;
  finalBakeTimeInMinutes: number;
  growthType: string;
};

export default class APCfnDeploymentStrategy extends appconfig.CfnDeploymentStrategy {
  constructor(scope: Construct, props: APCfnDeploymentStrategyProps) {
    super(scope, "APCfnDeploymentStrategy", {
      deploymentDurationInMinutes: props.deploymentDurationInMinutes,
      growthFactor: props.growthFactor,
      name: props.name,
      replicateTo: props.replicateTo,
      description: props.description,
      finalBakeTimeInMinutes: props.finalBakeTimeInMinutes,
      growthType: props.growthType,
    });
  }
}
