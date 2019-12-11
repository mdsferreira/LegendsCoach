import React from 'react';
import {View, StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const Screen = ({color, children}) => {
  return (
    <Content color={color}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      {children}
    </Content>
  );
};

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
