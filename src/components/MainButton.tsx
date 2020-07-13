import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../constants/Colors';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export const MainButton = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Button outLine={props.outLine}>
        {props.children}
        <TextButton outLine={props.outLine}>{props.title}</TextButton>
      </Button>
    </TouchableWithoutFeedback>
  );
};

const TextButton = styled(Text)`
  color: ${props =>
    !props.outLine ? Colors.primary.main : Colors.secondary.main};
  font-size: 18;
  font-weight: bold;
`;

export const Button = styled(View)`
  background-color: ${props =>
    !props.outLine ? Colors.secondary.main : Colors.primary.light};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  height: 50px;
  border-radius: 27;
`;
