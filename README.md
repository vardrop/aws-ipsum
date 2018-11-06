# aws-ipsum

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

Simple AWS lorem ipsum, customizable via dictionary.

## Demo

[Link to Demo](https://8qgkf5dhn9.execute-api.us-east-1.amazonaws.com/dev/)

## Setup

### Install serverless

```
$ npm i -g serverless
```

### Customize

As a standard, this app returns a lorem ipsum formed from words of `./dictionary`.
You can change the words and deploy the app (note: words must be seperated by newlines).

### Run local

```shell
$ npm run local
```

### Deploy to AWS

`~/.aws/credentials`
```ini
[ipsum]
aws_access_key_id = <acces_key>
aws_secret_access_key = <secret>
```

```shell
$ npm i
$ npm run deploy
```

## Test

### Install Dependencies

```shell
$ npm i -D
```

### Run Tests

```shell
$ npm test
```
