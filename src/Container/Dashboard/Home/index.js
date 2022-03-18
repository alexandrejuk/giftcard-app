import React from 'react'
import { 
  Grid, 
  Text,
  Paper,
} from '@mantine/core'

const Home = ({ }) => { 
  return (
    <Grid>
      <Grid.Col span={12}>
        <Text>Bem-vindo ao seu portal Gift Card</Text>
        <Text size="xs" color="gray">
          Acesso fácil e rápido a todas as ferramentas e informações necessárias 
          para acompanhar a evolução da nossa parceria.
        </Text>
      </Grid.Col>
      <Grid.Col span={6}>
        <Paper p="md">
          <Text>Cartões Presentes</Text>
          <Text size="xs" color="gray">
            Crie e gerencies seus cartões presentes.
          </Text>
        </Paper>
      </Grid.Col>
      <Grid.Col span={6}>
        <Paper p="md">
          <Text>Outras soluções</Text>
          <Text size="xs" color="gray">
            Solicitações de Créditos com nossos parceiros.
          </Text>
        </Paper>
      </Grid.Col>
    </Grid>
  )
}

export default Home
