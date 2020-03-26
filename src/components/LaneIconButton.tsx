import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import styled from 'styled-components/native';

export const LaneIconButton = ({lane, onPress, imageSource, selected}) => {
  const LaneIcon = styled.View`
    padding: 10px;
    width: 70px;
    height: 50px;
    align-items: center;
    border-color: ${Colors.darkBlue};
    opacity: ${!selected ? 0.5 : 1};
  `;

  return (
    <TouchableOpacity onPress={() => onPress(lane)}>
      <LaneIcon>
        <Image source={imageSource} style={styles.backgroundImage} />
      </LaneIcon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: 30,
    height: 30,
  },
});
