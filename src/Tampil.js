import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tampil extends Component{
    constructor(props) {
        super(props)
        this.state = {
           mahasiswa:[]
        }
    }

    componentDidMount = () => {
        fetch("http://192.168.43.230/api_android/ambil.php")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    mahasiswa:responseJson.mhs
                })
            })
    }
    

    render(){
        return(
            <View>
                <Text style={{fontSize:20,textAlign:'center'}}>
                    Data Siswa
                </Text>
            </View>
        )
    }
}

export default Tampil