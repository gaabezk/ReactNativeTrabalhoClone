import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F6F6',
    marginLeft:4,
    marginRight:4
  },
  nav:{
    alignSelf:'flex-end',
    flexDirection:'row',
    padding:20,
    paddingTop:15
  },
  navTexto:{
    fontWeight: "bold",
    fontSize:15,
    color:'black'
  },
  botaoAdic:{
    marginLeft:'30%',
    alignSelf: 'flex-end',
    width:20,
    height:20
  },
  favoritos:{
    flexDirection:'row',
    margin:10,
    marginTop:23,
  },
  favoritosText:{
    fontWeight: "bold",
    fontSize:18,
    color:'black'
  },
  editar:{
    marginLeft:260,
    fontSize:15,
    color:'#0054ba'
  }
})