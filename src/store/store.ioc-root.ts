import { Container } from 'inversify';

import { DomainContainerModule, ItemDtoService } from '@domain/index';
import { CoreContainerModule } from '@core/core.ioc-module';

const storeContainer = new Container();

storeContainer.load(CoreContainerModule, DomainContainerModule);

export const itemDtoService = storeContainer.resolve(ItemDtoService);