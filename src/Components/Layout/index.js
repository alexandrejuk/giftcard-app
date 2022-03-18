import React from 'react'
import { AppShell, Navbar, Header, ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core'
import { ArrowsDoubleNeSw, CreditCard, Home, Check } from 'tabler-icons-react'
import { useNavigate } from "react-router-dom"

const data = [
  { icon: <Home size={16} />, color: 'blue', label: 'Página inicial', path: '/dashboard/home' },
  { icon: <Check size={16} />, color: 'blue', label: 'Validação de cartões', path: '/dashboard/card-validate' },
  { icon: <ArrowsDoubleNeSw size={16} />, color: 'blue', label: 'Créditos', path: '/dashboard/transactions' },
]

const MainLink = ({ icon, color, label, path, action }) => {
  return (
    <UnstyledButton
      onClick={() => action(path)}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const Layout = ({ children }) => {
  let navigate = useNavigate()

  const goTo = path => navigate(path)
  const links = data.map((link) => <MainLink {...link} key={link.label} action={goTo} />)
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 250 }} height="90vh" p="xs">
          <div>{links}</div>
        </Navbar>
      }
      header={<Header height={60} p="xs">LOGO</Header>}
      styles={(theme) => ({
        main: {
          backgroundColor: 
            theme.colorScheme === 'dark' 
              ? theme.colors.dark[8] 
              : theme.colors.gray[0] 
        },
      })}
    >
        {children}
    </AppShell>
  )
}

export default Layout
