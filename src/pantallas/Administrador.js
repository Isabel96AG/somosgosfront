import React from 'react';
import {StyleSheet,View} from 'react-native';
import {  Text,Card,Paragraph,Title } from 'react-native-paper';





function Administrador(props){
const {navigation}=props;

const onNavigation =()=>{
   
    navigation.navigate('ficheropreadopcion')
   }

const onNavigationFichero =()=>{
   
    navigation.navigate('registraranimal')
   }

   const onNavigationBorrar =()=>{
   
    navigation.navigate('borraranimal')
   }



    return(
        <View>
 <Card style={styles.card} onPress={onNavigation}>
    <Card.Content>
      <Title>Fichero de preadopciones</Title>
      <Paragraph>Acceder datos contacto adoptantes</Paragraph>
    </Card.Content>
  </Card>

  <Card style={styles.card}  onPress={onNavigationFichero}>
    <Card.Content >
      <Title>Registrar animal en base de datos</Title>
      <Paragraph>Crear fichero que verá el público</Paragraph>
    </Card.Content>
  </Card>

  <Card style={styles.card} onPress={onNavigationBorrar}>
    <Card.Content>
      <Title>Borrar animal de la base de datos</Title>
      <Paragraph>Borrar del perfil público una vez adoptados</Paragraph>
    </Card.Content>
  </Card>


       
        </View>
    )

}
export default Administrador;
const styles=StyleSheet.create ({
    card:{
        marginHorizontal:10,
        marginVertical:10,
    },


})