import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PrismComponent } from './component/ngx.prism.component';

// Export module's public API
export { PrismComponent } from './component/ngx.prism.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PrismComponent],
  declarations: [PrismComponent]
})
export class PrismModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrismModule,
      providers: []
    };
  }
}
