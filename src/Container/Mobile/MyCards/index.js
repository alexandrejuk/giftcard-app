import React from 'react'
import { 
  Button,
  Collapse,
  Center,
  Grid,
  Image,
  UnstyledButton
} from '@mantine/core'
import GiftCardDefault from '../../../Components/Gifts/Default'
import FnzADS from '../../../assets/fnzads.png'

const MyCards = ({
  data,
  cardSelected,
  handleSelectCard
}) => {
  return (
    <Center>
      <Grid style={{ textAlign: "center", margin: 0 }}>
        {data.giftCards.map(giftCard => (
          <Grid.Col key={giftCard.id} span={12}>
            <UnstyledButton onClick={() => handleSelectCard(giftCard.id)}>
              <GiftCardDefault 
                giftCardSelected={giftCard}
                logo=""
              />
            </UnstyledButton>
            <Collapse in={cardSelected === giftCard.id} style={{ marginTop: "10px" }}>
              <Button onClick={() => console.log("teste")}>Utilizar Cartão</Button>
            </Collapse>
          </Grid.Col>
        ))}

        <Grid.Col span={12}>
          <Center>
            <a
              target="_blank"
              href="https://finanzero.com.br"
              rel="noreferrer"
              
            >
              <Image
                style={{ margin: "auto" }}
                width="340px"
                radius="md"
                src={FnzADS}
                alt="Finanzero"
                fit="cover"
              />
            </a>
          </Center>
        </Grid.Col>
      </Grid>
    </Center>
  )
}

export default MyCards
