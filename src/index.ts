/**
 * FetchOptionsBuilder helps to build fetch options for making HTTP requests using the Fetch API.
 * It includes methods to set common options such as Bearer token, method, content type, body, credentials, and custom headers.
 */
export class FetchOptionsBuilder {
  private options: any;

  constructor() {
    this.options = {
      headers: {},
    };
  }

  /**
   * Sets the HTTP method for the request.
   * @param {string} method The HTTP method.
   * @returns {FetchOptionsBuilder} The current builder instance.
   */
  method(method: Method): FetchOptionsBuilder {
    this.options.method = method;

    return this;
  }

  /**
   * Adds a request body to the fetch options and converts it to a JSON string.
   * If the method is GET, a warning will be logged to indicate that GET requests
   * typically do not include a body but it is still allowed.
   * @param {object} body The request body to be added.
   * @returns {FetchOptionsBuilder} The current builder instance for chaining.
   */
  body(body: any): FetchOptionsBuilder {
    if (this.options.method === 'GET') {
      console.warn('Warning: GET requests usually do not include a body');
      return this;
    }

    this.options.body = body ? JSON.stringify(body) : undefined;

    return this;
  }

  /**
   * Sets the credentials mode for the request.
   * @param {string} credentials The credentials mode.
   * @returns {FetchOptionsBuilder} The current builder instance.
   */
  credentials(credentials: Credentials): FetchOptionsBuilder {
    this.options.credentials = credentials;

    return this;
  }

  /**
   * Sets the Bearer token for the request.
   * @param {string | number} accessToken The access token.
   * @returns {FetchOptionsBuilder} The current builder instance.
   */
  bearerToken(accessToken: string | number): FetchOptionsBuilder {
    this.options.headers['Authorization'] = `Bearer ${accessToken}`;

    return this;
  }

  /**
   * Sets the content type for the request.
   * @param {string} contentType The content type.
   * @returns {FetchOptionsBuilder} The current builder instance.
   */
  contentType(contentType: ContentType): FetchOptionsBuilder {
    this.options.headers['Content-Type'] = contentType;

    return this;
  }

  /**
   * Sets a custom header for the request.
   * @param {string} key The header key.
   * @param {string} value The header value.
   * @returns {FetchOptionsBuilder} The current builder instance.
   */
  customHeader(key: string, value: string): FetchOptionsBuilder {
    this.options.headers[key] = value;

    return this;
  }

  /**
   * Builds and returns the final fetch options object.
   * @returns {object} The fetch options object.
   */
  build() {
    return this.options;
  }
}

// Types
type Method =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'CONNECT'
  | 'TRACE'
  | 'PATCH';

type Credentials = 'omit' | 'same-origin' | 'include';

type ContentType =
  | 'application/json'
  | 'application/xml'
  | 'application/xhtml+xml'
  | 'application/pdf'
  | 'application/octet-stream'
  | 'text/plain'
  | 'text/html'
  | 'text/css'
  | 'text/csv'
  | 'text/javascript'
  | 'image/jpeg'
  | 'image/png'
  | 'image/gif'
  | 'image/svg+xml'
  | 'image/webp'
  | 'audio/mpeg'
  | 'audio/ogg'
  | 'audio/wav'
  | 'video/mp4'
  | 'video/webm'
  | 'video/ogg'
  | 'multipart/form-data';
