import React, { Component } from 'react'
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import axios from 'axios'



class Products extends Component {
    state = {
        data_products: [],
        refreshing: false,
        showSpinner: false
    }

    componentDidMount(){
        this.getDataProducts()
    }

    getDataProducts = async () => {
        const url = `http://172.104.50.9:3000/api/shoppinglists`
        axios.get(url)
            .then(res => {
                this.setState({
                    data_products: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    renderData = ({item}) => {
        console.log(item)
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('productDetails', { id: item.product_id })}>
                <View style={{ 
                    flexDirection: 'row',
                    backgroundColor: 'white', 
                    borderRadius: 5,
                    margin: 10 }}>
                    <Image 
                        style={{ width: 100, 
                            marginLeft: 10,
                            height: 100, 
                            resizeMode: 'contain' }}
                        source={{ uri: item.image }} />
                    <View style={{ marginTop: 15, marginLeft: 10 }}>
                        <Text style={{ 
                            fontSize: 20, 
                            fontWeight: '500' }}>{item.product_name}</Text>
                        <Text>Rp {item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    refreshData = () => {
        console.log('this is refreshing data')
        this.getDataProducts()
    }

    getMoreData = () => {
        console.log('get more data!')
        this.setState({ showSpinner: true })
    }


    render(){
        return (
            <View>

                {
                    this.state.data_products.length > 0 && 
                    <FlatList
                        data={this.state.data_products}
                        keyExtractor={item => item.id}
                        renderItem={(item) => this.renderData(item)}
                        onRefresh={() => this.refreshData()}
                        refreshing={this.state.refreshing}
                        onEndReached={() => this.getMoreData()}
                        onEndReachedThreshold={5}
                    />

                    
                }

                {
                    this.state.showSpinner &&
                    <ActivityIndicator size='small' />
                }



            </View>
        )
    }
}

export default Products