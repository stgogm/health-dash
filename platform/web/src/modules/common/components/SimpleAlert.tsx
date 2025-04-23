import { Alert, AlertRootProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  status?: AlertRootProps['status']
  children?: ReactNode
  message?: string
  title?: string
}

export const SimpleAlert = ({
  status = 'info',
  children,
  message,
  title,
}: Props) => (
  <Alert.Root status={status}>
    <Alert.Indicator />
    <Alert.Content>
      {title && <Alert.Title>{title}</Alert.Title>}
      {message && <Alert.Description>{message}</Alert.Description>}
      {children}
    </Alert.Content>
  </Alert.Root>
)
