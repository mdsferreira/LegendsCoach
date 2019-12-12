import React, {useState} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../screens/constants/Colors';

export const Input = props => {
  const [isFocus, setFocus] = React.useState(false);
  return (
    <InputStyled
      isFocus={isFocus}
      {...props}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
};

const InputStyled = styled(TextInput)`
  border: ${props => (props.isFocus ? '2px solid black' : 'none')};
  background-color: ${props =>
    props.isFocus ? Colors.white : Colors.inputGrey};
  padding: 12px;
  margin: 10px;
`;
