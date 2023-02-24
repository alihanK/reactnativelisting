import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Card, Header} from 'react-native-elements'
import firestore from '@react-native-firebase/firestore'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Feed = ( {navigation }) => {
  const Stack = createNativeStackNavigator()
  const [calisanlar, setCalisanlar] = useState ([])

  const fetchCalisanlar = async () => {
    const calisanlarCollection =  await firestore().collection('calisanlar').get()
    console.log(calisanlarCollection.docs)
    setCalisanlar(
        calisanlarCollection.docs.map((doc) => {
            return{...doc.data(), id: doc.id}
        })
    )

  }

  useEffect(()=> {
    fetchCalisanlar()
  }, [])
  return (
    <View>
       <Header 
        placement='left'
        centerComponent={{text: 'EMPLOYEES', style:{color: '#fff', marginTop: 2} }}
        leftComponent= {{icon: 'people', color: '#fff'}}
   
       />
       <ScrollView>
            {
                calisanlar.map(calisanlar => {
                    return(
                        <Card key={calisanlar.id}>
                            <Card.Title>
                                {calisanlar.adi}
                            </Card.Title>
                        </Card>
                    )
                    
                })
            }
       </ScrollView>
    </View>
    
  )
}

export default Feed