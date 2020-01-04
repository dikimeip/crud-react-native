import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: "",
            kelas: "",
            nim: "",
            alamat: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            nama: this.props.navigation.state.params.nama,
            kelas: this.props.navigation.state.params.kelas,
            nim: this.props.navigation.state.params.nim,
            alamat: this.props.navigation.state.params.alamat,
        })
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }} >Nim Mahasiswa</Text>
                <TextInput
                    placeholder='Masukan Nim'
                    underlineColorAndroid='blue'
                    style={{ marginTop: 0, textAlign: 'center', height: 40 }}
                    value={this.state.nim}
                    editable={false}
                />
                <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }} >Nama Mahasiswa</Text>
                <TextInput
                    placeholder='Masukan Nama'
                    underlineColorAndroid='blue'
                    style={{ marginTop: 20, textAlign: 'center', height: 40 }}
                    value={this.state.nama}
                    onChangeText={TextInput => this.setState({ nama: TextInput })}
                />
                <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }} >Kelas Mahasiswa</Text>
                <TextInput
                    placeholder='Masukan Kelas'
                    underlineColorAndroid='blue' style={{ marginTop: 20, textAlign: 'center', height: 40 }}
                    keyboardType="numeric"
                    value={this.state.kelas}
                    onChangeText={TextInput => this.setState({ kelas: TextInput })}
                />
                <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }} >Alamat Mahasiswa</Text>
                <TextInput
                    placeholder='Masukan Alamat'
                    underlineColorAndroid='blue'
                    style={{ marginTop: 20, textAlign: 'center', height: 40 }}
                    value={this.state.alamat}
                    onChangeText={TextInput => this.setState({ alamat: TextInput })}
                />
                <TouchableOpacity
                    onPress={}
                    style={{ backgroundColor: '#61A754', padding: 20, borderRadius: 10, marginTop: 20 }}
                >
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>UBAH DATA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={}
                    style={{ backgroundColor: '#61A754', padding: 20, borderRadius: 10, marginTop: 20 }}
                >
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>HAPUS DATA</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Edit