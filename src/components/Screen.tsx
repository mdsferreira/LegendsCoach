import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {NavBar} from './NavBar';
import {Colors} from '../constants/Colors';

export const Screen = ({color, children}) => {
  return (
    <Content color={color}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      {children}
    </Content>
  );
};

const Content = styled(SafeAreaView)`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${props =>
    props.color ? props.color : Colors.primary.main};
  width: 100%;
  height: 100%;
`;
