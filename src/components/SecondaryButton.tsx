import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../constants/Colors';

export const SecondaryButton = props => {
  return (
    <TouchableWithoutFeedback {...props}>
      <Button>
        {props.children}
        <TextButton>{props.title}</TextButton>
      </Button>
    </TouchableWithoutFeedback>
  );
};

const TextButton = styled(Text)`
  color: ${Colors.especial.main};
  font-size: 18;
`;

const Button = styled(View)`
  background-color: ${Colors.primary.light};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px;
  height: 50px;
  border-radius: 21;
`;
