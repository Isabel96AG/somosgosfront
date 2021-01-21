
import React,{useState} from 'react';
import {StyleSheet, Text,View,TouchableOpacity} from 'react-native';
import {TextInput,Headline,Button}from 'react-native-paper';

function FormularioAdopcion(){
 
 
const [Nombre,setNombre]=useState("");
console.log(Nombre)
const [nombrePersona,setnombrePersona]=useState("");
console.log(nombrePersona)
const[email,setEmail]=useState("");
const [telefono,setTelefono]=useState("");
const[poblacion,setPoblacion]=useState("");
// const[fechaPreadoptar,setfechaPreadoptar]=useState("");

    const[formError,setFormError]=useState({})

   


   
    const onSubmit =()=>{
        // console.log(props)
        // let errors={};
        // if( !Nombre.Nombre || !nombrePersona.nombrePersona || !email.email || !telefono.telefono || !poblacion.poblacion ){
        //     if(!Nombre.Nombre){errors.Nombre=true};
        //     if(!nombrePersona.nombrePersona){errors.nombrePersona=true};
        //     if(!email.email){errors.email=true};
        //     if(!telefono.telefono){errors.telefono=true};
        //     if(!poblacion.poblacion){errors.poblacion=true};
        //     } else {
               
          fetch('http://localhost:3000/preadoptar', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
              },
              body: JSON.stringify({Nombre:Nombre,nombrePersona:nombrePersona,email:email,telefono:telefono,poblacion:poblacion}),
              })

   

     .then(function (results) {

       return results.json();

     })

     .then(function (res) {
      
console.log(res)
  

      

     });


       
        // }
        // setFormError(errors);
    }

    const onChangeNombre =(e)=>{
        setNombre(e.nativeEvent.text)
    
    }
    const onChangenombrePersona =(e)=>{
        setnombrePersona(e.nativeEvent.text)
    }
    const onChangeEmail =(e)=>{
        setEmail(e.nativeEvent.text)
    }
    const onChangeTelefono =(e)=>{
        setTelefono(e.nativeEvent.text)
    }
    const onChangePoblacion =(e)=>{
        setPoblacion(e.nativeEvent.text)
    }









    return(
        <>
        
            <View style={styles.contenedor}>
     
      <Headline style={styles.titulo}>Formulario Adopción</Headline>
            <TextInput  style={[styles.input,formError.Nombre && {borderColor:'#f80000'}]}
            text={Nombre}
            
            placeholder="Nombre del animal"
            placeholderTextColor='#afb1b8'
            onChange={(e)=>onChangeNombre(e)}/>
             <TextInput  style={[styles.input,formError.nombrePersona && {borderColor:'#f80000'}]}
            text={nombrePersona}
            
            placeholder="Tu Nombre y apellidos"
            placeholderTextColor='#afb1b8'
            onChange={(e)=>onChangenombrePersona(e)}/>
            <TextInput  style={[styles.input,formError.email && {borderColor:'#f80000'}]}
            text={email}
            placeholder="Email contacto"
            placeholderTextColor='#afb1b8'
            onChange={(e)=>onChangeEmail(e)}/>
             <TextInput  style={[styles.input,formError.telefono && {borderColor:'#f80000'}]}
            text={telefono}
            placeholder="Teléfono contacto"
            placeholderTextColor='#afb1b8'
            onChange={(e)=>onChangeTelefono(e)}/>
             <TextInput  style={[styles.input,formError.poblacion && {borderColor:'#f80000'}]}
            text={poblacion}
            placeholder="Población"
            placeholderTextColor='#afb1b8'
            onChange={(e)=>onChangePoblacion(e)}/>

            <TouchableOpacity onPress={onSubmit}>
            <Text style={styles.anyadir}>Enviar Datos Preadopcion</Text>
            
            </TouchableOpacity>

        </View>
       
           
        </>
    )

}




export default FormularioAdopcion;
const styles=StyleSheet.create ({
    contenedor:{
        height:'80%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:40,
        width:'70%',
        marginBottom:20,
        // backgroundColor:'#afb1b8',
        // textAlign:'center',
        // borderColor:'#afb1b8',
        // borderWidth:1,
        // paddingHorizontal:20,
        // borderRadius:10,


    },
   
    textoDate:{
        color:"#fff",
        fontSize:16,

    

    },
    anyadir:{
        fontSize:18,
        color:"#7eafc5",
    },
    titulo:{
        marginBottom:15,
    }
   
})