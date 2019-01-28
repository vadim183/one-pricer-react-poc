import { ContainerModule, interfaces } from 'inversify';

import { ItemDtoService } from '@domain/item-dto.service';

export const DomainContainerModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind<ItemDtoService>(ItemDtoService)
      .toSelf()
      .inSingletonScope();
  }
);
