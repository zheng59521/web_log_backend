import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引用组件
import { RoleComponent } from './role/role.component'
import { RouterComponent } from './router/router.component'
import { RolerouterComponent } from './rolerouter/rolerouter.component'

// 路由信息
const routes: Routes = [
  { path: 'role', component: RoleComponent, data: { title: '角色管理' } },
  { path: 'router', component: RouterComponent, data: { title: '路由管理' } },
  { path: 'role-router', component: RolerouterComponent, data: { title: '角色-权限管理'} },
];

// 导入到根模块
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthadminRoutingModule { }
