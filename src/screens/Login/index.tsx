import {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import Logo from '../../assets/images/amazonLogo.png';
import Select from '../../assets/images/select.png';
import * as React from 'react';

export const Login = ({navigation}: any) => {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [style, setStyle] = useState<boolean>(false);
  const [user, setUser] = useState<string>('gabriel');
  const [pass, setPass] = useState<string>('admin123');

  const userADM = 'gabriel';
  const passADM = 'admin123';

  function mostrarOcultar() {
    if (hidePass === true) {
      setHidePass(false);
      setStyle(true);
    } else {
      setHidePass(true);
      setStyle(false);
    }
  }

  function autenticar() {
    if (user === userADM && pass === passADM) {
      navigation.navigate('Dispositivos');
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.nav}>
        <Image source={Logo} style={Styles.image} />
      </View>

      <View style={Styles.login}>
        <Text style={Styles.titulo}>Fazer login</Text>
        <Text style={Styles.esqueciSenha}>Esqueci a senha</Text>
        <TextInput
          value={user}
          onChangeText={text => setUser(text)}
          placeholderTextColor="#686767"
          style={Styles.input}
          placeholder="E-mail ou número de telefone"
        />
        <TextInput
          value={pass}
          onChangeText={text => setPass(text)}
          secureTextEntry={hidePass}
          placeholderTextColor="#686767"
          style={Styles.input}
          placeholder="Senha Amazon"
        />

        <TouchableOpacity
          activeOpacity={1}
          onPress={mostrarOcultar}
          style={Styles.senha}>
          <Image
            source={Select}
            style={style ? Styles.select : Styles.select2}
          />
          <Text style={Styles.textoSenha}>Mostrar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={autenticar} style={Styles.botaoLogin}>
          <Text style={Styles.texto}>FAZER LOGIN</Text>
        </TouchableOpacity>

        <View>
          <Text style={Styles.termos}>
            Ao continuar, você concorda com as{' '}
            <Text style={Styles.azul}>Condições de Uso</Text> da Amazon. Por
            favor verifique a{' '}
            <Text style={Styles.azul}>Notificação de Privacidade</Text>,{' '}
            <Text style={Styles.azul}>Notificação de Cookies</Text> e a{' '}
            <Text style={Styles.azul}>
              Notificação de Anúncios Baseados em interesse
            </Text>
            .
          </Text>
        </View>

        <View style={Styles.footer}>
          <TouchableOpacity style={Styles.botaoCriarConta}>
            <Text style={Styles.textoCriarConta}>
              CRIAR UMA NOVA CONTA AMAZON
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
