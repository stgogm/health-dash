import { Outlet } from 'react-router-dom'

import { AppLayout } from './App.layout'

export const App = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
)
