import { View, Text } from 'react-native'
import React from 'react'
import SetListItem from '../../components/SetListItem/SetListItem'
import styles from './styles'

const MySetsScreen = () => {
  return (
    <View style={styles.container}>
      <SetListItem set={{name: "Ford Mustang Shelby® GT500®", year: "2022", theme:"Technic", num: "42138", pcs:"544"}} onPress={()=>{}}/>
    </View>
  )
}

export default MySetsScreen