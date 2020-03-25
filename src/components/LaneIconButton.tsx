import React from 'react';
import {Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import styled from 'styled-components/native';

export const LaneIconButton = ({lane, onPress, imageSource, selected}) => {
  const LaneIcon = styled.View`
    background-color: ${Colors.backgroundLaneIcon};
    border-radius: 35px;
    padding: 10px;
    box-shadow: 2px 2px #888888;
    width: 50px;
    height: 50px;
    margin: 10px;
    border: 2px solid;
    border-color: ${Colors.gold};
    opacity: ${!selected ? 0.2 : 1};
  `;

  return (
    <TouchableWithoutFeedback onPress={() => onPress(lane)}>
      <LaneIcon>
        <Image source={imageSource} style={styles.backgroundImage} />
      </LaneIcon>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
