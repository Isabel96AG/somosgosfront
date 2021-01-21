import React,{useState,useEffect} from 'react';
import { Title } from 'react-native-paper';
import {Image, StyleSheet, Text,View,ScrollView,Dimensions,TouchableOpacity} from 'react-native';

import {map}from 'lodash';

const {width}=Dimensions.get('window');
//con esto calculamos el ancho de la pantalla de manera dinamica

function Animal(props){
    // console.log(props)

    const {route,navigation}=props;
    const {id}=route.params
const [animales,setAnimales]=useState({})
const [foto,setFoto]=useState({})


const onNavigation =()=>{
   
    navigation.navigate('preadopcion')
   
    

}




useEffect (()=>{
    fetch(`http://localhost:3000/listadoAnimales/${id}`)
    
    .then(function (results) {

      return results.json();

    })

    .then(function (res) {

   setAnimales(res)


    });

}, [])





//hacemos asi el map para recorrer el array que traia cada animal .Muy importante los props.
    return(
        <ScrollView  style={styles.pagina}>
          <View style={styles.contenedor}>
           {map(animales, (animal, index)=>(
               <Movie key={index} animal={animal}/>
           ))}
           <View  style={styles.registro}>
            <TouchableOpacity onPress={onNavigation}>
            <Text style={styles.botonTexto}>Iniciar la adopción</Text>
            </TouchableOpacity>
            </View>
       </View>
        </ScrollView>
    )
    

}

function Movie (props){
    console.log(props)
    const {animal}=props;
    const {Imagen,Nombre,Especie,Raza,Sexo,Color,Edad,Vacunas,Localidad,Estado}=animal;


    return(
        <View style={styles.animal}>
           
          <Image style={styles.image} source={{uri:Imagen}}/>
        
            <Text style={styles.titulo}>{Nombre}</Text>


            <Text>Especie: {Especie}</Text>
            <Text>Raza: {Raza}</Text>
            <Text>Sexo: {Sexo}</Text>
            <Text>Color: {Color}</Text>
            <Text>Edad: {Edad}</Text>
            <Text>Vacunas: {Vacunas}</Text>
            <Text>Localidad: {Localidad}</Text>
            <Text>Estado:  {Estado}</Text>
        </View>
    )
}




export default Animal;
const styles=StyleSheet.create ({
    contenedor:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        width:'100%',
     
    },
    animal:{
        width:width,
        height:500,
        justifyContent:'center',
        alignItems:'center',
       
   
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        
    },
    botonTexto:{
        color:'#fff',
        fontSize:18,
        justifyContent:'center',
        alignItems:'center',
    
 
        

    },
    pagina:{
        backgroundColor:'#dae7ee',
    },
    registro:{
      
        justifyContent:'center',
        alignItems:'center',
      marginLeft:120,

    },
    image:{
        width:'100%',
        height:350,
        borderRadius:20,
      
    },

})