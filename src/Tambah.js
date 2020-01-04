import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

class Tambah extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nim: '',
            nama: '',
            kelas: '',
            alamat: ''
        }
    }

    showStudent = () => {
       this.props.navigation.navigate("Tampil")
    }



    insertStudent = () => {
        fetch("http://192.168.43.230/api_android/tambah.php",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nim: this.state.nim,
                    nama: this.state.nama,
                    kelas: this.state.kelas,
                    alamat: this.state.alamat
                })
            }).then(response => response.json())
            .then(responseJson => {
                alert(JSON.stringify(responseJson.message))
                this.setState({
                    nim: '',
                    nama: '',
                    kelas: '',
                    alamat: ''
                })
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, textAlign: 'center', }} >Halaman Tambah Siswa</Text>
                <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }} >Nim Mahasiswa</Text>
                <TextInput
                    placeholder='Masukan Nim'
                    underlineColorAndroid='blue'
                    style={{ marginTop: 0, textAlign: 'center', height: 40 }}
                    onChangeText={TextInput => this.setState({ nim: TextInput })}
                    value={this.state.nim}
                />
                <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }} >Nama Mahasiswa</Text>
                <TextInput
                    placeholder='Masukan Nama'
                    underlineColorAndroid='blue'
                    style={{ marginTop: 20, textAlign: 'center', height: 40 }}
                    onChangeText={TextInput => this.setState({ nama: TextInput })}
                    value={this.state.nama}
                />
                <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }} >Kelas Mahasiswa</Text>
                <TextInput
                    placeholder='Masukan Kelas'
                    underlineColorAndroid='blue' style={{ marginTop: 20, textAlign: 'center', height: 40 }}
                    keyboardType="numeric"
                    onChangeText={TextInput => this.setState({ kelas: TextInput })}
                    value={this.state.kelas}
                />
                <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }} >Alamat Mahasiswa</Text>
                <TextInput
                    placeholder='Masukan Alamat'
                    underlineColorAndroid='blue'
                    style={{ marginTop: 20, textAlign: 'center', height: 40 }}
                    onChangeText={TextInput => this.setState({ alamat: TextInput })}
                    value={this.state.alamat}
                />
                <TouchableOpacity
                    onPress={this.insertStudent}
                    style={{ backgroundColor: '#61A754', padding: 20, borderRadius: 10, marginTop: 20 }}
                >
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>SIMPAN DATA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.showStudent}
                    style={{ backgroundColor: '#61A754', padding: 20, borderRadius: 10, marginTop: 20 }}
                >
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>LIHAT DATA</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Tambah