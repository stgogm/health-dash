import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from '@emotion/react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { DashboardPage } from './modules/dashboard/Dashboard.page'
import { DoctorPage } from './modules/doctors/modules/doctor/Doctor.page'
import { DoctorsPage } from './modules/doctors/Doctors.page'
import { App } from './modules/app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={defaultSystem}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<App />}>
              <Route path="doctors/:id" element={<DoctorPage />} />
              <Route path="doctors" element={<DoctorsPage />} />
              <Route path="" element={<DashboardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>
)
