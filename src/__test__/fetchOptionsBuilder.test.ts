import { FetchOptionsBuilder } from '../';

describe('FetchOptionsBuilder', () => {
  it('should set Bearer token', () => {
    const options = new FetchOptionsBuilder().bearerToken('test_token').build();

    expect(options.headers['Authorization']).toBe('Bearer test_token');
  });

  it('should set HTTP method', () => {
    const options = new FetchOptionsBuilder().method('POST').build();

    expect(options.method).toBe('POST');
  });

  it('should set content type', () => {
    const options = new FetchOptionsBuilder()
      .contentType('application/json')
      .build();

    expect(options.headers['Content-Type']).toBe('application/json');
  });

  it('should set request body', () => {
    const body = { key: 'value' };
    const options = new FetchOptionsBuilder().method('POST').body(body).build();

    expect(options.body).toBe(JSON.stringify(body));
  });

  it('should set credentials mode', () => {
    const options = new FetchOptionsBuilder().credentials('include').build();

    expect(options.credentials).toBe('include');
  });

  it('should set custom header', () => {
    const options = new FetchOptionsBuilder()
      .customHeader('X-Custom-Header', 'custom_value')
      .build();

    expect(options.headers['X-Custom-Header']).toBe('custom_value');
  });
});
