import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

import axios from 'axios';

import PeopleList from '../components/PeopleList';

type Props = { };
export default class PeoplePage extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = { peoples: [], loading: true, error: false };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/API?nat=br&results=1500')
      .then(res => this.setState({ peoples: res.data.results, loading: false }))
      .catch(_ => this.setState({ loading: false, error: true }));
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.content() }
      </View>
    );
  }

  content() {
    if (this.state.error) return <Text style={ styles.error }>Erro ao carregar lista de contatos...</Text>;
    if (this.state.loading) return <ActivityIndicator size="large" color="#cbcbcb"/>;
    return <PeopleList 
      peoples={ this.state.peoples }
      onPress={ people => this.props.navigation.navigate('PeopleDetail', people) }/>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center'
  }
});