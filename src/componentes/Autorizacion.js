import React,{useState} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import FormularioLogin from './FormularioLogin';
import FormularioRegistro from './FormularioRegistro';
function Autorizacion(){
    const [isLogin,setIsLogin]=useState(true);

    const changeEstado =()=>{
        setIsLogin(!isLogin);
    };

    return (
        <View style={styles.view}>
            
            <Image style={styles.frente} source={require ('../imagenes/frente.png')}/>
            <FormularioLogin/>
       
           
            {isLogin ? (
                <FormularioLogin changeEstado={changeEstado}/>
                 ) : (
                     <FormularioRegistro changeEstado={changeEstado}/>
                 )}
        </View>
    )
};
const styles=StyleSheet.create({
    view: {
        flex:1,
        alignItems:'center',
    },
    frente:{
        marginTop:80,
        marginBottom:30,
        width:"60%",
      

    }

})

export default Autorizacion;