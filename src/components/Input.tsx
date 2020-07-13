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
        console.log('focus');
        setFocus(true);
        props.setTouched();
      }}
      onBlur={() => setFocus(false)}
      placeholderTextColor={Colors.secondary.main}
    />
  );
};

export const InputStyled = styled(TextInput)`
  border: ${props =>
    props.isFocus ? `2px solid ${Colors.primary.main}` : 'none'};
  background-color: ${props =>
    props.isFocus ? '#312e31' : Colors.primary.light};
  padding: 10px 20px;
  margin: 10px;
  border-radius: 27px;
  color: ${Colors.secondary.main};
`;
