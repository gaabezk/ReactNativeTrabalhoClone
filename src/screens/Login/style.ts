import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    margin: -7,
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  nav:{
    alignItems: 'center',
    alignContent: 'center',
    borderBottomColor: '#A2A2A2',
    borderBottomWidth: 1,
    paddingBottom:7

  },
  titulo:{
    fontSize: 25,
    color: '#323232',
    marginBottom: 4,
  },
  image:{
    width: 300,
    height: 84,
  },
  login:{
    margin: 20,
  },
  input:{
    paddingLeft:15,
    backgroundColor:'white',
    height: 46,
    marginTop: 2,
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  botaoLogin:{
    backgroundColor: '#0071b7',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 24,
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#0071b7',
    borderRadius: 4,
  },
  texto:{
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 15,
    color: 'white',
  },
  esqueciSenha:{
    paddingBottom: 12,
    fontSize: 14,
    color:'#0054ba',
    alignSelf:"flex-end"
  },
  senha:{
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 8,
    paddingTop: 22
  },
  select:{
    width: 6,
    height: 5,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#464646',
    borderRadius: 3,
  },
  textoSenha:{
    paddingLeft: 15,
    fontSize: 16
  },
  termos:{
    color:'#464646',
    fontSize:14.9,
    paddingTop:18,
    paddingBottom: 32
  },
  azul:{
    color:'#0054ba'
  },
  footer:{
    paddingBottom: 45,
    borderTopColor: '#C0C0C0',
    borderBottomColor: '#A2A2A2',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  botaoCriarConta:{
    backgroundColor: '#e8e9ec',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 18,
    borderRadius: 4,
  },
  textoCriarConta:{
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 16,
    color:'#0054ba'
  }
})
