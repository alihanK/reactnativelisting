import React, { useState } from 'react'
import { View } from 'react-native'

import { Button, Text, Input } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore'

const CreateScreen = ({navigation}) => {
  const [calisanlar, setCalisanlar] = useState ({
    adi: '',
    gorevi: '',
    sehir: '',
    yas: '',

  })

  const createCalisanlar = async (calisanlar)   => {
    try{
      await firestore().collection('calisanlar').add(calisanlar)
      navigation.navigate('Home')
    }
    catch(error) {
      console.log(error)
    }
  }

  return (
    <View style={{flex:1, justifyContent: 'center', paddingHorizontal: 15}}>
      
      <Text style={{textAlign: 'center', marginBottom: 15}}>Employee Info: </Text>
      
      <Text>Name: </Text>
      <Input value= {calisanlar.adi} 
      onChangeText={(adi) => {setCalisanlar({...calisanlar, adi: adi})}}
      placeholder='name'
      leftIcon= {{type: 'font-awesome', name: 'header'}}
      />
      <Text>Job: </Text>
      <Input value= {calisanlar.gorevi} 
      onChangeText={(gorevi) => {setCalisanlar({...calisanlar, gorevi: gorevi})}}
      placeholder='job'
      leftIcon= {{type: 'font-awesome', name: 'file'}}
      />

      <Text>City: </Text>
      <Input value= {calisanlar.sehir} 
      onChangeText={(sehir) => {setCalisanlar({...calisanlar, sehir: sehir})}}
      placeholder='city'
      leftIcon= {{type: 'font-awesome', name: 'university'}}
      />

      <Text>Age: </Text>
      <Input value= {calisanlar.yas} 
      onChangeText={(yas) => {setCalisanlar({...calisanlar, yas: yas})}}
      placeholder='age'
      leftIcon= {{type: 'font-awesome', name: 'vcard'}}
      />
      <Button title='SEND' onPress={()=> {createCalisanlar(calisanlar)}} />
      
    </View>
  )
}

export default CreateScreen