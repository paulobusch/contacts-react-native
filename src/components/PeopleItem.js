import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import capitalizeFistLetter from '../utils/capitalizeFistLetter';

const PeopleItem = props => {
    const { login, name, picture } = props.people;
    const { title, first, last } = name;
    return (
        <TouchableOpacity onPress={ () => props.onPress(props.people) }>
            <View style={ styles.line }>
                <Image style={ styles.avatar } source={ { uri: picture.thumbnail } }/>
                <Text style={ styles.text } key={ login.uuid }>{ capitalizeFistLetter(title) } { capitalizeFistLetter(first) } { capitalizeFistLetter(last) }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        flex: 7,
        fontSize: 20,
        paddingLeft: 15
    },
    avatar: {
        flex: 1,
        aspectRatio: 1,
        marginLeft: 15,
        borderRadius: 5
    }
});

export default PeopleItem;