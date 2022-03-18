import React from 'react'
import { 
  Button, 
  Grid,
  Group,
  Image,
  Modal,
  NumberInput, 
  Paper,
  Radio,
  RadioGroup,
  Table, 
  Text,
  UnstyledButton,
} from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { CirclePlus, Eye, Copy } from 'tabler-icons-react'
import moment from 'moment'
import GiftCardDefault from '../../../Components/Gifts/Default'
import { statusTranslate, typeTranslate } from '../../../utils/translate'
import FnzADS from '../../../assets/fnzads.png'
import Konkero from '../../../assets/konkero.png'

const GiftCard = ({
  data,
  form,
  giftCardSelected,
  handleOpen,
  handleOpenGiftCard,
  handleClose,
  handleGiftCardClose,
  handleSubmit,
  opened,
  showGiftCard,
}) => { 
  const clipboard = useClipboard({ timeout: 500 })
  const ths = (
    <tr>
      <th>status</th>
      <th>Tipo</th>
      <th>Valor</th>
      <th>Ver</th>
    </tr>
  )

  const rows = data && data.map((element) => (
    <tr key={element.id}>
      <td>{statusTranslate[element.status]}</td>
      <td>{typeTranslate[element.giftCardType]}</td>
      <td>{element[element.giftCardType]}</td>
      <td><UnstyledButton onClick={() => handleOpenGiftCard(element)}><Eye size={16} /></UnstyledButton></td>
    </tr>
  ))

  return (
    <Grid>
      <Grid.Col span={6}>
        <a
          target="_blank"
          href="https://finanzero.com.br"
          rel="noreferrer"
        >
          <Image
            height="200px"
            radius="md"
            src={FnzADS}
            alt="Finanzero"
            fit="cover"
          />
        </a>
      </Grid.Col>
      <Grid.Col span={6}>
        <a
          target="_blank"
          href="https://www.konkero.com.br/comparadores/cartao-credito"
          rel="noreferrer"
        >
        <Image
          height="200px"
          radius="md"
          src={Konkero}
          alt="Konkero"
          fit="cover"
        />
        </a>
      </Grid.Col>
      <Grid.Col span={12}>
        <Paper shadow="xs" radius="xs" p="md">
          <Grid>
            <Grid.Col span={12}>
              <Text>Cartões Presentes</Text>
              <Text size="xs" color="gray">Gerencie e crie seus cartões</Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Button 
                onClick={handleOpen} 
                size="xs" 
                leftIcon={<CirclePlus  size={16} />} 
                color="indigo" 
                radius="xs"
              >
                Adicionar
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
                    {...form.getInputProps('giftCardType')}
                  >
                    <Radio value="plan" label="Dias" />
                    <Radio value="discount" label="Desconto" />
                    <Radio value="amount" label="Valor" />
                  </RadioGroup>
                </Grid.Col>
                <Grid.Col span={12}>
                  <NumberInput
                    decimalSeparator=","
                    hideControls
                    defaultValue={1}
                    placeholder=""
                    label="Valor"
                    radius="xs"
                    required
                    {...form.getInputProps('value')}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Group position="right" mt="md">
                    <Button type="submit">Criar</Button>
                  </Group>
                </Grid.Col>
              </Grid>
            </form> 
          </Modal>

          <Modal
            opened={showGiftCard}
            onClose={handleGiftCardClose}
          >
            <Grid justify="center">
              <Grid.Col span={12}>
                <GiftCardDefault 
                  giftCardSelected={giftCardSelected} 
                  logo=""
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Grid>
                  <Grid.Col span={6}>
                    <Text>Status</Text>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Text>{statusTranslate[giftCardSelected.status]}</Text>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Text>Expira em:</Text>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Text>{moment(giftCardSelected.card_expiration_date).format("DD/MM/YYYY")}</Text>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Text>Copiar Link:</Text>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Button 
                      leftIcon={<Copy  size={16} />} 
                      onClick={() => clipboard.copy(`http://localhost:3000/#/mobile/card-active/${giftCardSelected.id}`)}>{clipboard.copied ? 'Copiado' : 'Copiar'}</Button>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Modal>
        </Paper>
      </Grid.Col>
    </Grid>
  )
}

export default GiftCard
