import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../constants/Colors';
import styled from 'styled-components/native';
// import { Container } from './styles';

export const Card = ({title, subtitle}) => (
  <View style={styles.background}>
    <CardContainer>
      <View style={styles.title}>
        <Text style={styles.subtitleText}>{subtitle}</Text>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </CardContainer>
  </View>
);

export const CardContainer = styled.View`
  /* flex: 1; */
  background-color: ${Colors.white};
  margin: 20px;
  height: 200px;
  border-radius: 20;
  border-bottom-width: 0;
  elevation: 1;
  margin-left: 25;
  margin-right: 25;
  margin-top: 20;
  z-index: 99;
  ${props =>
    props.cardWidth &&
    css`
      width: props.cardWidth;
    `};
`;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.black,
    height: 100,
    width: Dimensions.get('window').width,
    marginBottom: 120,
  },
  title: {
    borderBottomColor: Colors.inputGrey,
    borderBottomWidth: 1,
    padding: 5,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
  },
  subtitleText: {
    textAlign: 'center',
    fontSize: 10,
  },
});
