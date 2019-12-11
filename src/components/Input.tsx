import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../screens/constants/Colors';

export const Input = styled(TextInput)`
  /* border: 2px solid black; */
  background-color: ${Colors.inputGrey};
  padding: 12px;
  margin: 10px;
`;
