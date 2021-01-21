import React from 'react'
import { createDrawerNavigator }from '@react-navigation/drawer';
import StackNavegacion from './Stack';
import ContenidoDrawer from './ContenidoDrawer';

const Drawer=createDrawerNavigator();
//pasamos con spread ... todos los props a contenidoDrawer
function Navegacion (){
    return (
        <Drawer.Navigator initialRouteName="app" drawerContent={(props)=><ContenidoDrawer{...props}/>}>
            <Drawer.Screen name="app" component={StackNavegacion}/>
        </Drawer.Navigator>
    )
}
export default Navegacion;