## RestApi Demo
A RestApi showcase which has following features;
1. Listens on port 9000
2. Has get request handlers implemented for routes: "/" , "/query"
3. Has post request handler implemented for : "/input"
4. Keeps track of strings sent through POST method.
5. Only takes the JSON value in POST request body as input, key is omitted

## Requirements
* Node 14.16.*
* Express 4.17.*

## Installation`
```bash
npm install
```

## Run
```bash
npm start
```

## Testing
For testing, a 3rd party application line POSTman or Insomnia is needed. The file named `InsomniaTests.json` can be exported to either of these applications and then can be used for testing after API has been started.

```bash
npm start
```
