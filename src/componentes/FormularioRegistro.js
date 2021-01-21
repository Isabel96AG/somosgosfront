import React ,{useState}from 'react';

import {StyleSheet, Text,TouchableOpacity,TextInput,View} from 'react-native';






const FormularioRegistro=(props)=>{
    const {changeEstado}=props;

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[repeatPassword,setRepeatPassword]=useState('');
    const [formError,setFormError]=useState({});
 
    

    const registar =()=>{
        // let errors={};
        // if (!email.email || !password.password ||!repeatPassword.repeatPassword){
        //     if(!email.email)errors.email=true;
        //     if(!password.password)errors.password=true;
        //     if(!repeatPassword.repeatPassword)errors.repeatPassword=true;
        //
        // }else if (password.password !== repeatPassword.repeatPassword){
        //     errors.password=true;
        //     errors.repeatPassword=true;
        // }else if (password.password.length < 6){
        //     errors.password=true;
        //     errors.repeatPassword=true;
        // }else{


            fetch('http://localhost:3000/registro', {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                  },
                  body: JSON.stringify({email:email,password:password}),
                  })
    
       
    
         .then(function (results) {
    
           return results.json();
    
         })
    
         .then(function (res) {
          
          console.log(res)
      
    
          
    
         });
    







        



        
        // }
        // setFormError(errors)
        // console.log(errors);

    }

    const onChangeEmail =(e)=>{
        setEmail(e.nativeEvent.text)
    }
    const onChangePassword =(e)=>{
        setPassword(e.nativeEvent.text)
    }
    const onChangerepeatPassword=(e)=>{
        setRepeatPassword(e.nativeEvent.text)
    }







    return(
        <>
           <TextInput
           style={[styles.input,formError.email && styles.error]}
           text={email}
           placeholder="Correo electrónico"
           placeholderTextColor='#828282'
           onChange={(e)=>onChangeEmail(e)}
           />
            <TextInput
            text={password}
           style={[styles.input,formError.password && styles.error]}
           placeholder="Password"
           placeholderTextColor='#828282'
           secureTextEntry={true}
           onChange={(e)=>onChangePassword(e)}
           />
            <TextInput
            text={repeatPassword}
           style={[styles.input,formError.repeatPassword && styles.error]}
           placeholder="Repeat Password"
           placeholderTextColor='#828282'
           secureTextEntry={true}
           onChange={(e)=>onChangerepeatPassword(e)}
           />
            <TouchableOpacity onPress={registar}>
            <Text style={styles.botonTexto}>Regístrate</Text>
            </TouchableOpacity>
           <View style={styles.login}>
            <TouchableOpacity onPress={changeEstado}>
            <Text style={styles.botonTexto}>Inicia Sesión</Text>
            </TouchableOpacity>
            </View>

        </>
    )

}



export default FormularioRegistro;
const styles=StyleSheet.create ({

    botonTexto:{
        color:'#fff',
        fontSize:18,

    },
    input:{
        height:48,
        width:"70%",
        marginBottom:20,
        color:'#828282',
        backgroundColor:'#dae7ee',
        borderRadius:5,
        textAlign:'center',
        borderColor:'#afb1b8',
        borderWidth:1,

    },
    login:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:20,
    },
    error:{
        borderColor:'#f80000',
    },
})