import { StyleSheet, View , Text} from 'react-native';
import Item from '../../components/cartao';
import styles from '../../components/cartao/style';


export default function Home(){

    const listaItens = [
        {
          nomeItem: ' Espada ',
          descricao: 'Ataque básico: Causa 20 de dano',
          urlImgItem: 'https://img.freepik.com/fotos-premium/arma-de-rpg-objeto-de-item-de-rpg-isometrico-para-jogo-de-rpg-generative-ai_742252-9286.jpg'
        },
          
        {
          nomeItem: ' Fênix ',
          descricao: 'Ataque básico: Causa 200 de dano',
          urlImgItem: 'https://pm1.narvii.com/6497/ff15c56e5f75936d8acf54f9651f9c310143fb5e_00.jpg'
        },
          
        {
          nomeItem: ' Livro ',
          descricao: 'Ataque mágico: Causa 30 de dano básico + 280 de dano mágico',
          urlImgItem: 'https://img.freepik.com/fotos-premium/livro-de-feiticos-de-rpg-objeto-de-item-de-rpg-isometrico-para-jogo-de-rpg-generative-ai_742252-8951.jpg'
        }
    ]


    return(

      <View >

        <Item item={listaItens[0]}/>
        <Item item={listaItens[1]}/>
        <Item item={listaItens[2]}/>

      </View>

    )
  

}
