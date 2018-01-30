import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'


class ProductDetail extends Component {
    render(){
        const { id } = this.props.navigation.state.params
        
        return (
            <View>
                <Text>{id}</Text>
            </View>
        )
    }
}

export default ProductDetail