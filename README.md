# Fetch Opts

[![Test](https://github.com/bocarw121/fetch-opts/actions/workflows/test.yml/badge.svg)](https://github.com/bocarw121/fetch-opts/actions/workflows/test.yml) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bocarw121/fetch-opts/blob/main/LICENCE)

Fetch Opts is a lightweight JavaScript library that simplifies the process of
creating fetch options for the Fetch API. It provides a chainable
interface for building fetch options, making it easier to work with various
options such as Bearer tokens, methods, content types, bodies, credentials, and
custom headers.

## Installation

NPM:

```bash
npm install fetch-opts
```

Yarn:

```bash
yarn add fetch-opts
```

## Usage

```ts
import { FetchOptionsBuilder } from 'fetch-opts';

// Create a new instance of the builder.
const builder = new FetchOptionsBuilder();

const requestBody = {
  email: 'myemail@mail.com',
  password: 'password123',
};

// Chain the methods to set the desired options.
const fetchOptions =
  .method('POST')
  .contentType('application/json')
  .body(requestBody)
  .credentials('include')
  .build();

fetch('https://api.example.com/signin', fetchOptions)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

## API Reference

| Method         | Parameters                      | Description                                                                                       |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| `bearerToken`  | `accessToken: string or number` | Sets the Bearer token for the request.                                                            |
| `method`       | `method: string`                | Sets the HTTP method for the request.                                                             |
| `contentType`  | `contentType: string`           | Sets the Content-Type header for the request. Includes built-in types for common `content types`. |
| `body`         | `body: any`                     | Sets the request body. If the method is 'GET', it will display a warning and ignore the body.     |
| `credentials`  | `credentials: string`           | Sets the credentials mode for the request.                                                        |
| `customHeader` | `key: string, value: string`    | Sets a custom header for the request.                                                             |
| `build`        |                                 | Builds and returns the final fetch options object.                                                |

## Contributing

Contributions are welcome from the community! If you're interested in contributing, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes, and add tests for your changes.
4. Commit your changes.

- Note that Husky is set up to automatically run tests and format your code using Prettier before each commit. Make sure your changes pass the tests.

5. Push your branch to your fork.
6. Open a pull request from your fork to the main repository.

## License

This project is licensed under [MIT](./LICENCE)
