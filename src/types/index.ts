export type Method =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'CONNECT'
  | 'TRACE'
  | 'PATCH';

export type Credentials = 'omit' | 'same-origin' | 'include';

export type ContentType =
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
