import { ContainerModule, interfaces } from 'inversify';

import { HttpClient } from './http';

export const CoreContainerModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind<HttpClient>(HttpClient)
      .toSelf()
      .inSingletonScope();
  }
);
