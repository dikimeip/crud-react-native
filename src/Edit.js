import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Edit extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nama: "",
            kelas:"",
            nim: "",
            alamat :""
        }
    }

    componentDidMount = () =>{
        this.setState({
            nama:this.props.navigation.state.params.nama,
            kelas:this.props.navigation.state.params.kelas,
            nim:this.props.navigation.state.params.nim,
            alamat:this.props.navigation.state.params.alamat,
        })
    }

    render(){
        return(
            <View>
                <Text>
                    Halaman Edit {this.state.nama}
                    Kelas : {this.state.kelas}
                    nim : {this.state.nim}
                    alamat : {this.state.alamat}
                </Text>
            </View>
        )
    }
}

export default Edit