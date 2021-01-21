import React,{useState} from 'react';
import {StyleSheet, Text,View} from 'react-native';
import {TextInput,Headline,Button}from 'react-native-paper';




function CrearAnimal(){
const[Nombre,setNombre]=useState('');
const[Sexo,setSexo]=useState('')
const[Especie,setEspecie]=useState('');
const[Edad,setEdad]=useState('');
const[Raza,setRaza]=useState('');
const[Color,setColor]=useState('');
const[Vacunas,setVacunas]=useState('');
const[Localidad,setLocalidad]=useState('');
const[Estado,setEstado]=useState('');
const[Imagen,setImagen]=useState('');







    const onChangeNombre =(e)=>{
        setNombre(e.nativeEvent.text)
    
    }
    const onChangeSexo =(e)=>{
        setSexo(e.nativeEvent.text)
    
    }
    const onChangeEspecie =(e)=>{
        setEspecie(e.nativeEvent.text)
    
    }
    const onChangeEdad =(e)=>{
        setEdad(e.nativeEvent.text)
    
    }
    const onChangeRaza =(e)=>{
        setRaza(e.nativeEvent.text)
    
    }
    const onChangeColor =(e)=>{
        setColor(e.nativeEvent.text)
    
    }
    const onChangeVacunas =(e)=>{
        setVacunas(e.nativeEvent.text)
    
    }
    const onChangeLocalidad =(e)=>{
        setLocalidad(e.nativeEvent.text)
    
    }
    const onChangeEstado =(e)=>{
        setEstado(e.nativeEvent.text)
    
    }
    const onChangeImagen =(e)=>{
        setImagen(e.nativeEvent.text)
    
    }


    return(
        <View style={styles.contenedor}>
            <Headline style={styles.titulo}>
                Crear Animal en perfil Público
            </Headline>
            <TextInput style={styles.input}
            text={Nombre}
            label='Nombre'
            placeholder='Escribir nombre de animal'
            onChange={(e)=>onChangeNombre(e)}/>
                <TextInput style={styles.input}
                text={Sexo}
            label='Sexo'
            placeholder='Escribir sexo de animal'
            onChange={(e)=>onChangeSexo(e)}/>
                <TextInput style={styles.input}
                text={Especie}
            label='Especie'
            placeholder='Escribir especie de animal'
            onChange={(e)=>onChangeEspecie(e)}/>
                <TextInput style={styles.input}
                text={Edad}
            label='Edad'
            placeholder='Cachorro/Joven/Adulto'
            onChange={(e)=>onChangeEdad(e)}/>
                <TextInput style={styles.input}
                text={Raza}
            label='Raza'
            placeholder='Escribir nombre de animal'
            onChange={(e)=>onChangeRaza(e)}/>
                <TextInput style={styles.input}
                text={Color}
            label='Color'
            placeholder='Escribir nombre de animal'
            onChange={(e)=>onChangeColor(e)}/>
                <TextInput style={styles.input}
                text={Vacunas}
            label='Vacunas'
            placeholder='Escribir nombre de animal'
            onChange={(e)=>onChangeVacunas(e)}/>
                <TextInput style={styles.input}
                text={Localidad}
            label='Localidad'
            placeholder='Escribir nombre de animal'
            onChange={(e)=>onChangeLocalidad(e)}/>
                <TextInput style={styles.input}
                text={Estado}
            label='Estado'
            placeholder='Escribir nombre de animal'
            onChange={(e)=>onChangeEstado(e)}/>
                <TextInput style={styles.input}
            text={Imagen}
            label='Imagen'
            placeholder='Escribir nombre de animal'
            onChange={(e)=>onChangeImagen(e)}/>

            <Button icon='pencil-circle'> Crear Animal</Button>
            
        </View>
    )

}
export default CrearAnimal;
const styles=StyleSheet.create ({

    titulo:{
        textAlign:'center',
        marginBottom:5,
        fontSize:20,
    },
    contenedor:{
     
        marginHorizontal:'2.5%',
    },
    input:{
        height:45,
        marginBottom:10,
        backgroundColor:'transparent',

    }
})