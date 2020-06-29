import React, {useState} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../constants/Colors';

export const Input = props => {
  const [isFocus, setFocus] = React.useState(false);
  return (
    <InputStyled
      isFocus={isFocus}
      {...props}
      onFocus={() => {
        setFocus(true);
        props.setTouched();
      }}
      onBlur={() => setFocus(false)}
    />
  );
};

const InputStyled = styled(TextInput)`
  border: ${props =>
    props.isFocus ? `2px solid ${Colors.primary.main}` : 'none'};
  background-color: ${props =>
    props.isFocus ? Colors.primary.main : Colors.primary.light};
  padding: 12px;
  margin: 10px;
`;
