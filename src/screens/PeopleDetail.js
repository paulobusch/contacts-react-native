import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Line from '../components/Line';

export default class PeopleDetail extends React.Component {
    render() {
        const people = this.props.navigation.state.params;
        const pictureURL = people.picture.large;

        return (
            <View style={ styles.container }>
                <Image source={ { uri: pictureURL } } 
                    style={ styles.avatar }
                />
                <View style={ styles.detail }>
                    <Line label="E-mail:" content={ people.email }/>
                    <Line label="Cidade:" content={ people.location.city }/>
                    <Line label="Estado:" content={ people.location.state }/>
                    <Line label="Celular:" content={ people.cell }/>
                    <Line label="Nacionalidade:" content={ people.nat }/>
                    <Line label="Profissão:" content={ people.profissao }/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 5
    },
    detail: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    }
});