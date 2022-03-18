import React from 'react'
import { 
  Button, 
  Grid,
  Group, 
  Modal,
  NumberInput, 
  Paper,
  Radio,
  RadioGroup,
  Table, 
  Text,
} from '@mantine/core'
import { CirclePlus } from 'tabler-icons-react'
import { parseCurrency } from '../../../utils/currency'
import { typeTransactionTranslate } from '../../../utils/translate'

const Transactions = ({
  creditTotal,
  data,
  form,
  handleOpen,
  handleClose,
  handleSubmit,
  opened,
}) => { 
  const ths = (
    <tr>
      <th>Descrição</th>
      <th>Tipo</th>
      <th>Valor</th>
    </tr>
  )

  const rows = data && data.map((element) => (
    <tr key={element.id}>
      <td>{element.description}</td>
      <td>{typeTransactionTranslate[element.type]}</td>
      <td style={{ color: element.type === 'debt' && 'red' }}> 
        {element.type === 'debt' ? '-' : ''}{parseCurrency(element.amount)}
      </td>
    </tr>
  ))
  return (
    <Paper shadow="xs" radius="xs" p="md">
      <Grid>
        <Grid.Col span={12}>
          <Text>Utilização de crédito</Text>
          <Text size="xs" color="gray">Saldo atual: {parseCurrency(creditTotal)}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Button 
            onClick={handleOpen} 
            size="xs" 
            leftIcon={<CirclePlus  size={16} />} 
            color="indigo" 
            radius="xs"
          >
            Comprar crédito
          </Button>
        </Grid.Col>
        <Grid.Col span={12}>
          <Table highlightOnHover>
            <thead>{ths}</thead>
            <tbody>{rows}</tbody>
          </Table>
        </Grid.Col>
      </Grid>
      <Modal
        opened={opened}
        onClose={handleClose}
        title="Criar Cartão Presente!"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Grid>
            <Grid.Col span={12}>
              <RadioGroup
                label="Selecione o tipo"
                spacing="xl"
                size="sm"
                required
                {...form.getInputProps('amount')}
              >
                <Radio value="10000" label="R$ 100,00" />
                <Radio value="20000" label="R$ 200,00" />
                <Radio value="50000" label="R$ 500,00" />
              </RadioGroup>
            </Grid.Col>
            <Grid.Col span={12}>
              <NumberInput
                decimalSeparator=","
                hideControls
                defaultValue={1}
                placeholder=""
                label="Valor em Dias"
                radius="xs"
                required
                {...form.getInputProps('value')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Group position="right" mt="md">
                <Button type="submit">Comprar</Button>
              </Group>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>
    </Paper>
  )
}

export default Transactions
