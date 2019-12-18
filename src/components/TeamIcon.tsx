import React from 'react';
import styled from 'styled-components/native';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const TeamIcon = () => (
  <IconContainer>
    <Icon name="users" size={30} color={Colors.primary} />
  </IconContainer>
);

const IconContainer = styled.View`
  background-color: ${Colors.black};
  border-radius: 40px;
  padding: 10px;
  box-shadow: 2px 2px #888888;
`;
