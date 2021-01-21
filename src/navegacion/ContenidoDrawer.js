import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import {DrawerContentScrollView}from '@react-navigation/drawer';
import { Drawer,Switch,TouchableRipple,Text}from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';




function ContenidoDrawer(props){

    const {navigation}=props;
    //traemos de los props del componente navegacion y los desestructuramos parta traerlos en la funcion flecha
     const[activo,setActivo]=useState('home')

     const onChangeScreen =(screen)=>{
         setActivo(screen)
         navigation.navigate(screen)
     }
//con navigation.navigate que lo traemos de props y lo hacemos funcionar con navigation(viene de props )y navigate
 //en el onPress en la funcion de onchange se le pone el nombre que tiene en el stack en name
 //para activar el drawer lo hacemos con el estado activ0 y ke decimos que si es igual a true lo marque
    return(
        <DrawerContentScrollView>
            
            <Drawer.Section>
                <Drawer.Item
                label='Inicio'
                active={activo==='home' && true}
                onPress={()=>onChangeScreen('home')}
               
                />
                 <Drawer.Item
                label='Sobre la asociación'
                active={activo === 'about' && true}
                onPress={()=>onChangeScreen('about')}

                 />
                  <Drawer.Item
                label='Área Privada'
                active={activo ==='areaprivada' && true}
                onPress={()=>onChangeScreen('areaprivada')}
                
                />



            </Drawer.Section>
        </DrawerContentScrollView>
    )

}
export default ContenidoDrawer;
const styles=StyleSheet.create ({

})