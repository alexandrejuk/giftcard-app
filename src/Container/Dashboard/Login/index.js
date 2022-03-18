import React from 'react'
import { 
  Button,
  Box,
  Grid,
  Group,
  Text,
  TextInput,
  PasswordInput,
} from '@mantine/core'

const Login = ({
  form,
  handleSubmit,
}) => {
  return (
    <Grid style={{ height: "100vh",  overflow: "hidden", margin: "0" }}>
      <Grid.Col span={6} style={{ background: "#15aabf" }}>
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <Text>Cartões Presentes</Text>
          <Text size="xs" color="gray">Gerencie e crie seus cartões</Text>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Grid>
              <Grid.Col span={8}>
                <TextInput 
                  label="Email" 
                  placeholder="Your email" 
                  required
                  {...form.getInputProps('email')}
                />
              </Grid.Col>
              <Grid.Col span={8}>
                <PasswordInput
                  placeholder=""
                  label="Senha"
                  radius="xs"
                  required
                  {...form.getInputProps('password')}
                />
              </Grid.Col>
              <Grid.Col span={8}>
                <Group position="right" mt="md">
                  <Button type="submit">Logar</Button>
                </Group>
              </Grid.Col>
            </Grid>
          </form>
        </Box>
      </Grid.Col>
    </Grid>
  )
}

export default Login
