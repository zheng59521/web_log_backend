import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { AuthadminRoutingModule } from './authadmin-routing.module';

// 声明要使用的组件
import { RoleComponent } from './role/role.component';
import { RouterComponent } from './router/router.component';
import { RolerouterComponent } from './rolerouter/rolerouter.component';

const COMPONENTS = [
  RoleComponent,
  RouterComponent,
  RolerouterComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    AuthadminRoutingModule
  ],  // 引用路由信息
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class AuthadminModule { }
