import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../constants/Colors';

export const Button = styled(TouchableOpacity)`
  border: 3px solid ${Colors.secondary.main};
  background-color: ${Colors.primary.main};
  padding: 12px;
  margin: 10px;
  padding: 13px 35px 12px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: 400;
  font-size: 18px;
  color: ${Colors.secondary.main};
  text-transform: uppercase;
`;
