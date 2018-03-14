# DynamoDb & Lambda
1. Using AWS SDK (https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html) add to your functions code responsible for post, put, get and delete. Solution you can find in ref_handler.js in current directory.

2. Create file data.json and prepare data which will be send to your lambda, reference files you can find in current directory

3. Invoke your lambda with prepared data
```
sls invoke -f post -p data.json
```