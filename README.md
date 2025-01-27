# python-lambda-cdk

Using this repo to experiment with deploying a lambda using the python managed runtime with the AWS CDK for Typescript

## notes of things to experiment
- [local bundling](https://github.com/1davidmichael/cdk-local-bundling-example)
- [another reference](https://aws.plainenglish.io/cdk-python-bundling-lambdas-the-right-way-or-fast-way-4f2e85b4e0e60)

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
