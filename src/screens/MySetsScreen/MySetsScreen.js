import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SetListItem from '../../components/SetListItem/SetListItem'
import styles from './styles'
import { images } from '../../config/images'

const MySetsScreen = () => {

  const mockSets = [
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
    { name: "Ford Mustang Shelby® GT500®", year: "2022", theme: "Technic", num: "42138", pcs: "544", image:images.example },
  ]

  const renderItem = ({ item, i }) => {

    return <SetListItem set={item} key={i} />
  }

  return (
    <View style={styles.container}>
      {/* <SetListItem set={mockSets[0]} onPress={() => { }} /> */}
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 12 }}
        renderItem={renderItem}
        data={mockSets}
      />
    </View>
  )
}

export default MySetsScreen