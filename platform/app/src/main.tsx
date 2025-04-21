import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { DashboardPage } from './modules/dashboard/Dashboard.page.tsx'
import { DoctorsPage } from './modules/doctors/Doctors.page.tsx'
import { App } from './modules/app/App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/doctors',
        element: <DoctorsPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={defaultSystem}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>
)
