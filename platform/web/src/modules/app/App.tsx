import { Outlet } from 'react-router'

import { AppLayout } from './App.layout'

export const App = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
)
