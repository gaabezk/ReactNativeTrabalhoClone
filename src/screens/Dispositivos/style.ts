import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    marginLeft: 4,
    marginRight: 4,
  },
  nav: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    padding: 20,
    paddingTop: 15,
  },
  navTexto: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  botaoAdic: {
    marginLeft: '30%',
    alignSelf: 'flex-end',
    width: 20,
    height: 20,
  },
  favoritos: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 15,
    marginBottom: 2,
  },
  BoldText: {
    marginLeft: 2,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  editar: {
    marginLeft: 244,
    fontSize: 15,
    color: '#0054ba',
  },
  card: {
    margin: 10,
    marginBottom: 0,
  },
  cardImg: {
    marginTop: 20,
    borderRadius: 11,
    width: 365,
    height: 200,
  },
  grupoNome: {
    paddingTop: 60,
    position: 'absolute',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  ultimoTexto: {
    marginTop: 30,
    marginBottom: 90,
    alignSelf: 'center',
    color: '#0270ab',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
