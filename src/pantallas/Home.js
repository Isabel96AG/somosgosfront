import React, { useState,useEffect } from 'react';
import {Title,Card,Paragraph} from 'react-native-paper';
import {StyleSheet, Text,View,ScrollView, Image} from 'react-native';
import CarrouselInicio from '../componentes/CarrouselInicio';




function Home(props){
    const {navigation,horizontal}=props;
const [animales, setAnimales]=useState({})

useEffect (()=>{
    fetch('http://localhost:3000/listadoAnimales')
    
    .then(function (results) {

      return results.json();

    })

    .then(function (res) {

   setAnimales(res)

     

    });

}, [])



    return(



        <ScrollView showsVerticalScrollIndicator={false} style={styles.total}>
{/* <View>
    <Image
    style={styles.banner}
    source={require('../imagenes/somosgosuno.png')}/>
</View> */}



        {animales && (
            <View style={styles.animalescontent}>
                <Title style={styles.titlecontent}>Buscan una familia</Title>
                <CarrouselInicio data={animales} navigation={navigation}/>
            </View>
        )}

        
         <View style={styles.contenedor}>
             <Text style={styles.titulo}> Sobre la asociación </Text>
         
                 {/* <View>
               
                 <Image
                   style={styles.imagen}
                   source={require('../imagenes/filosofia.png')}
                   
                   
                   />
                   
                   <Image
                    style={styles.imagen}
                    source={require('../imagenes/rescates.png')}

                   />
                



                    <Image
                     style={styles.imagen}
                     source={require('../imagenes/frente1.jpg')}
                     />
                       
                 </View> */}






               

         </View>


        </ScrollView>
    )

}
export default Home;
const styles=StyleSheet.create ({
animalescontent:{
    marginVertical:10,
   

},
titlecontent:{
    marginBottom:15,
    marginHorizontal:20,
    fontWeight:'bold',
    fontSize:22,
    color:'#3b3b3b',

},
total:{
    backgroundColor:'#dae7ee',
  },
  titulo:{
      fontWeight:'bold',
      fontSize:22,
      marginVertical:10,
  },
  contenedor:{
      marginHorizontal:10,
  },
imagen:{
    width:'100%',
    height:150,
    marginVertical:5,
 
},
banner:{
    height:150,
    flexDirection:'row',
    flex:1,
    width:'100%',
    marginHorizontal:25,
}
})

//flex 1 hace que tome toda la pantalla
