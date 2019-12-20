import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Screen} from '../../components/Screen';
import {Colors} from '../../constants/Colors';
import {styles} from '../Auth/style/Auth.css';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, CardContainer} from '../../components/Card';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';

export class HomeScreen extends Component {
  render() {
    return (
      <Screen>
        <ScrollView>
          <Card subtitle="Fim de " title="Temporada" />
          <CardContainer width={Dimensions.get('window').width - 50}>
            <Text></Text>
          </CardContainer>
        </ScrollView>
      </Screen>
    );
  }
}
