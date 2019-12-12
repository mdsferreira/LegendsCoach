import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Button = styled(TouchableOpacity)`
  border: 3px solid rgba(192, 252, 253, 0.7);
  background-color: #1e2328;
  padding: 12px;
  margin: 10px;
  padding: 13px 35px 12px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: 400;
  font-size: 18px;
  color: #f0e6d2;
  text-transform: uppercase;
`;
