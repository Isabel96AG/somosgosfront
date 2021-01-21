import React from 'react';
import {IconButton} from 'react-native-paper'
import {createStackNavigator}from '@react-navigation/stack';
import Home from '../pantallas/Home';
import About from '../pantallas/About';
import Animal from '../pantallas/Animal';
import AreaPrivada from '../pantallas/AreaPrivada';
import Preadopcion from '../pantallas/Preadopcion';
import Administrador from '../pantallas/Administrador';
import FicheroPreadopcion from '../pantallas/FicheroPreadopcion';
import RegistrarAnimal from '../pantallas/RegistrarAnimal';
import BorrarAnimal from '../pantallas/BorrarAnimal';


const Stack=createStackNavigator();

function StackNavegacion(props){

const buttonIzq =()=>{
    // los props traen navegation y al abrirlo trae caracteristicas una de ellas es openDrawer lo llamamos en el onpress
    return (
        <IconButton
        icon='menu'
        onPress={()=>props.navigation.openDrawer()}/>

    )
}


    return(
        <Stack.Navigator >
        <Stack.Screen
 
         name="home"
         component={Home}
         options={{title:'Somos Gos App',headerLeft: ()=>buttonIzq()}}/>
             <Stack.Screen
             
         name="about"
         component={About}
         options={{title:'Sobre la asociación',headerLeft: ()=>buttonIzq()}}/>
             <Stack.Screen
         name="animal"
         component={Animal}
         options={{title:'Animal',headerLeft: ()=>buttonIzq()}}/>
                <Stack.Screen
         name="preadopcion"
         component={Preadopcion}
         options={{title:'PreAdopción',headerLeft: ()=>buttonIzq()}}/>
             <Stack.Screen
         name="areaprivada"
         component={AreaPrivada}
         options={{title:'Área privada',headerLeft: ()=>buttonIzq()}}/>
                <Stack.Screen
         name="ficheropreadopcion"
         component={FicheroPreadopcion}
         options={{title:'Ficheros Preadopción',headerLeft: ()=>buttonIzq()}}/>
              <Stack.Screen
         name="borraranimal"
         component={BorrarAnimal}
         options={{title:'Eliminar Animal',headerLeft: ()=>buttonIzq()}}/>
                 <Stack.Screen
         name="registraranimal"
         component={RegistrarAnimal}
         options={{title:'Registrar Animal',headerLeft: ()=>buttonIzq()}}/>



              <Stack.Screen
         name="administrador"
         component={Administrador}
         options={{title:'Administrador',headerLeft: ()=>buttonIzq()}}/>

         
        
        </Stack.Navigator>
    )
}




export default StackNavegacion;