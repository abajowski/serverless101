# Environment

1. Install AWS CLI
https://docs.aws.amazon.com/cli/latest/userguide/installing.html

2. Get your AWS Key ID and and AWS Secrect Access Key 
https://awsguild.signin.aws.amazon.com/console

3. Configure CLI
```
aws configure
AWS Access Key ID [None]: youraccesskey
AWS Secret Access Key [None]: yoursecretkey
Default region name [None]: eu-west-1
Default output format [None]: ENTER
```
4. Install the serverless framework
```
npm i serverless -g
```
5.  Verify that serverless framework is installed
```
sls help
```
5. Create a new serverless project
```
sls create --template aws-nodejs --path youracronym
``` 