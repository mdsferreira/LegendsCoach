import React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../constants/Colors';

export const MainButton = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Button outLine={props.outLine} onPress={props.onPress}>
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
`;

export const Button = styled(View)`
  background-color: ${props =>
    !props.outLine ? Colors.secondary.main : Colors.primary.light};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 5px 20px;
  height: 50px;
  border-radius: 21;
`;
