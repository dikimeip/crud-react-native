import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

class Tampil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mahasiswa: []
        }
    }

    componentDidMount = () => {
        fetch("http://192.168.43.230/api_android/ambil.php")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    mahasiswa: responseJson.mhs
                })
            })
    }

    pindahHalaman = (nama,kelas,nim,alamat) => {
        this.props.navigation.navigate("Edit", {
             nim: nim,
             nama: nama,
             kelas: kelas,
             alamat: alamat
        })
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ListItem
            title={item.nama}
            subtitle={item.nim}
            rightSubtitle={item.alamat}
            onPress={(nama,kelas,nim,alamat) => this.pindahHalaman(item.nama,item.kelas,item.nim,item.alamat) }
        />
    )

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, textAlign: 'center', padding: 20, backgroundColor: 'brown', color: 'white' }}>
                    Data Siswa
                </Text>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.mahasiswa}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

export default Tampil