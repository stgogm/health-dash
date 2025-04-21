import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardPage } from '../dashboard/Dashboard.page'
import { AppLayout } from './App.layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  // {
  //   path: '/doctors',
  //   element: <DoctorsPage />,
  // },
])

const App = () => (
  <AppLayout>
    <RouterProvider router={router} />
  </AppLayout>
)

export default App
