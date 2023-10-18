import React from "react"
import { View } from "react-native"

const Spacer = ({hspace = 1}) => {
    return(
        <View style={{height: hspace}} ></View>
    )
}

export default Spacer;