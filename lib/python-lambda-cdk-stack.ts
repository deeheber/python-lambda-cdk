import * as path from "path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class PythonLambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, "PythonFunction", {
      architecture: lambda.Architecture.ARM_64,
      functionName: `${id}-function`,
      runtime: lambda.Runtime.PYTHON_3_13,
      handler: "lambda-handler.main",
      code: lambda.Code.fromAsset(path.join(__dirname, "../lambda"), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_13.bundlingImage,
          command: [
            "bash",
            "-c",
            "pip install -r requirements.txt -t /asset-output && cp -au . /asset-output",
          ],
          // local: {
          //   tryBundle(outputDir: string) {
          //     return {
          //       code: outputDir,
          //     };
          //   },
          // },
        },
      }),
    });
  }
}
