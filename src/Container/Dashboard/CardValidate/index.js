import React from 'react'
import {
  Button,
  Grid,
  Paper,
  Text,
} from '@mantine/core'
import { parseCurrency } from '../../../utils/currency'

const CardValidate = ({
  data,
  handleSubmit,
  refresh,
}) => { 
  const types = {
    'plan': 'Dias',
    'discount': '% off',
    'amount': ''
  }

  return (
    <Grid>
      <Grid.Col span={12}>
        <Text>Validar Cartões Presentes</Text>
      </Grid.Col>
      <Grid.Col span={12}>
        <Paper p="md">
          <Grid>
            <Grid.Col span={8}>
              <Text>
                <span style={{ color: "#228be6" }}>{data.length} </span> 
                Cartões para Validar
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Button onClick={refresh}>Atualizar</Button>
            </Grid.Col>
          </Grid>
        </Paper>
      </Grid.Col>
      <Grid.Col span={12}>
        <Paper p="md">
          {data.map(item =>(
            <Grid key={item.id}>
              <Grid.Col span={4}>
                <Text key={item.id}>
                  {item.customer.name}
                </Text>
                <Text size="xs" color="gray">
                  {item.customer.phone}
                </Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Text key={item.id}>
                  {item.giftCardType === 'amount' ? parseCurrency(item[item.giftCardType]) : item[item.giftCardType]} {types[item.giftCardType]}
                </Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button onClick={() => handleSubmit(item.id)}>Confirmar</Button>
              </Grid.Col>
            </Grid>
          ))}
        </Paper>
      </Grid.Col>
    </Grid>
  )
}

export default CardValidate
