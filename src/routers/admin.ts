/**
 * 登录和注册路由
 */

const AdminRoute = [
  {
    path: '/admin',
    component: () => import('@/views/Admin/Admin.vue'),
  },
];

export default AdminRoute;