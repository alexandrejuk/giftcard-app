import React from 'react'
import styles from './style.module.css'
import { 
  Button,
  Grid,
  Group,
  TextInput,
  PasswordInput,
} from '@mantine/core'

const Login = ({
  form,
  handleSubmit,
}) => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.cardForm}>
        <div className={styles.cardFormHeader}>
          COMPANY LOGO
          <h4 className={styles.textInfo}>Acesse o seu painel</h4>
        </div>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Grid>
              <Grid.Col span={12}>
                <TextInput 
                  label="Email" 
                  placeholder="Your email" 
                  required
                  {...form.getInputProps('email')}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <PasswordInput
                  placeholder=""
                  label="Senha"
                  radius="xs"
                  required
                  {...form.getInputProps('password')}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Group position="right" mt="md">
                  <Button fullWidth type="submit">Acessar</Button>
                </Group>
              </Grid.Col>
            </Grid>
          </form>
      </div>
    </div>
  )
}

export default Login
