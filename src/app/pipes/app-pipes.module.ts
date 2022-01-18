import {NgModule} from '@angular/core';
import {UnitSignPipe} from './unit-sign.pipe';
import {ZeroPadPipe} from './zero-pad.pipe';

@NgModule({
  declarations: [
    UnitSignPipe,
    ZeroPadPipe
  ],
  imports: [],
  providers: [],
  exports: [
    UnitSignPipe,
    ZeroPadPipe
  ],
})
export class AppPipesModule {
}
