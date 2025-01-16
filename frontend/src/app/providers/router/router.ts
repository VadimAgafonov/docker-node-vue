import { HomeLayout } from '@/shared/ui/layouts'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home'),
    meta: {
      layout: HomeLayout
    }
  },
]