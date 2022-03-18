import React from 'react'
import { 
  Button,
  Grid,
  Group,
  Modal,
  Text,
  TextInput,
} from '@mantine/core'
import moment from 'moment'
import { statusTranslate } from '../../../utils/translate'

import GiftCardDefault from '../../../Components/Gifts/Default'

const CardActive = ({
  data,
  form,
  handleSubmit,
  opened,
  handleOpen,
  handleClose,
}) => {
  return (
    <Grid style={{ textAlign: "center", margin: 0 }}>
      <Grid.Col span={12}>
        <GiftCardDefault 
          giftCardSelected={data} 
          logo=""
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Grid>
          <Grid.Col span={6}>
            <Text>Status</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{statusTranslate[data.status]}</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>Expira em:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{moment(data.card_expiration_date).format("DD/MM/YYYY")}</Text>
          </Grid.Col>
          <Grid.Col span={12}>
          {
            data.status === "waiting_active" && (
              <Button
                fullWidth 
                onClick={handleOpen}
              >
                Ativar
              </Button>
            )
          }
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col>
        <Modal
          opened={opened}
          onClose={handleClose}
        >
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Grid>
              <Grid.Col span={12}>
                <TextInput 
                  label="Nome completo" 
                  placeholder="l" 
                  required
                  {...form.getInputProps('name')}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput 
                  label="Email" 
                  placeholder="" 
                  required
                  {...form.getInputProps('email')}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput 
                  label="Celular" 
                  placeholder="" 
                  required
                  {...form.getInputProps('phone')}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Group position="right" mt="md">
                  <Button fullWidth type="submit">Ativar</Button>
                </Group>
              </Grid.Col>
            </Grid>
          </form>
        </Modal>
      </Grid.Col>
    </Grid>
  )
}

export default CardActive
