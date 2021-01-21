import React,{useState} from 'react';
import {StyleSheet, Text,View,Image} from 'react-native';
import Autorizacion from '../componentes/Autorizacion';
import FormularioLogin from '../componentes/FormularioLogin'
import FormularioRegistro from '../componentes/FormularioRegistro';



function AreaPrivada(props){

const{navigation}=props;
    const [isLogin,setIsLogin]=useState(true);

    const changeEstado =()=>{
        setIsLogin(!isLogin);
    };





    return(
        <View style={styles.view}>
               <Image style={styles.frente} source={require ('../imagenes/frente.png')}/>
          {/* <FormularioLogin/> */}
          {isLogin ? (
                <FormularioLogin changeEstado={changeEstado} navigation={navigation}/>
                 ) : (
                     <FormularioRegistro changeEstado={changeEstado}/>
                 )}


        </View>
    )

}
export default AreaPrivada;
const styles=StyleSheet.create ({
    view: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#dae7ee'
    },
    frente:{
        marginTop:80,
        marginBottom:20,
        width:"70%",
      

    }

})