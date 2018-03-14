'use strict'

const AWS = require("aws-sdk")
const docClient = new AWS.DynamoDB.DocumentClient()
const table = process.env.BLOG_TABLE

module.exports.post = (event, context, callback) => {
  let response
  let params = {
    TableName: table,
    Item: {
      "blogId": event.body.id,
      "title": event.body.title
    }
  }

  docClient.put(params, (err, data) => {
    if (err) {
      response = {
        statusCode: 400,
        body: JSON.stringify({
          message: err
        })
      }
    } else {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Item created'
        })
      }
    }

    callback(null, response)
  })
}

module.exports.put = (event, context, callback) => {
  let response
  let params = {
    TableName: table,
    Item: {
      "blogId": event.body.id,
      "title": event.body.title
    }
  }

  docClient.put(params, (err, data) => {
    if (err) {
      response = {
        statusCode: 400,
        body: JSON.stringify({
          message: err
        })
      }
    } else {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Item updatetd'
        })
      }
    }

    callback(null, response)
  })
}

module.exports.get = (event, context, callback) => {
  let response
  let params = {
    TableName: table,
    Key:{
      "blogId": event.pathParameters.id
    }
  }

  docClient.get(params, (err, data) => {
    if (err) {
      response = {
        statusCode: 400,
        body: JSON.stringify({
          message: err
        })
      }
    } else {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: data
        })
      }
    }

    callback(null, response)
  })
}

module.exports.delete = (event, context, callback) => {
  let response
  let params = {
    TableName: table,
    Key:{
      "blogId": event.pathParameters.id
    }
  }

  docClient.delete(params, (err, data) => {
    if (err) {
      response = {
        statusCode: 400,
        body: JSON.stringify({
          message: err
        })
      }
    } else {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Item deleted'
        })
      }
    }

    callback(null, response)
  })
}