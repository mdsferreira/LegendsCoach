import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import styled from 'styled-components/native';

export const LaneIconButton = ({lane, onPress, imageSource}) => (
  <TouchableOpacity onPress={() => onPress(lane)}>
    <LaneIcon>
      <Image source={imageSource} style={styles.backgroundImage} />
    </LaneIcon>
  </TouchableOpacity>
);

const LaneIcon = styled.View`
  background-color: ${Colors.backgroundLaneIcon};
  border-radius: 35px;
  padding: 10px;
  box-shadow: 2px 2px #888888;
  width: 75px;
  height: 75px;
  margin: 10px;
  border: 2px solid;
  border-color: ${Colors.gold};
`;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
