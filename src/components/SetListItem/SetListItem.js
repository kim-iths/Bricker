import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { colors } from '../../config/theme'
import { images } from '../../config/images'


const SetListItem = ({ set, onPress }) => {

    const imageSize = 120

    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(null, true)}
                onPress={onPress}>
                <View style={styles.innerContainer} pointerEvents="box-only">
                    <View style={{ flex: 1, paddingRight:4 }}>
                        <Text style={{ fontWeight: "bold",fontSize: 16, }}>{set.name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 6, }}>{set.year}</Text>
                        <Text style={{ marginTop: 6, }}>{set.theme}</Text>
                        <Text style={{ marginTop: "auto", color:"gray" }}>{`#${set.num} - ${set.pcs} pcs`}</Text>

                    </View>
                    <Image source={images.example} style={{ height: imageSize, width: imageSize, resizeMode: "contain", borderRadius: 8, }} />

                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default SetListItem

