import React from 'react';
import { StyleSheet, FlatList } from "react-native";
import PeopleItem from './PeopleItem';

const PeopleList = props => {
    return (
        <FlatList 
            style={ styles.container }
            data={ props.peoples }
            renderItem={ ({ item }) =>
                <PeopleItem
                    onPress={ props.onPress }
                    people={ item }/>
            }
            keyExtractor={ item => item.login.uuid }
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2f9ff'
    }
});

export default PeopleList;