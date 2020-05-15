import {Lb4ApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Lb4ApiApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4ApiApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
