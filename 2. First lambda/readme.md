# First lambda

1. Go to directory created by serverless and run your lambda locally
```
sls invoke local -f hello
```
2. Deploy your function

```
sls deploy
```
3. Invoke the function
```
sls invoke -f hello
```
4. Fetch the logs
```
sls logs -f hello -t
```
5. Remove created stack
```
sls remove
```