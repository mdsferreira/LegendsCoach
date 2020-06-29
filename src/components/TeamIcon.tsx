import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-ionicons';

export const TeamIcon = () => (
  <IconContainer>
    <Icon name="users" size={30} color={Colors.primary.contrastText} />
  </IconContainer>
);

const IconContainer = styled.View`
  background-color: ${Colors.primary.main};
  border-radius: 40px;
  padding: 10px;
  box-shadow: 2px 2px #888888;
`;
