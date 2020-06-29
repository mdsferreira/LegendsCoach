import React from 'react';
import {Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import styled from 'styled-components/native';

export const LaneIconButton = ({lane, onPress, imageSource, selected}) => {
  const LaneIcon = styled.View`
    padding: 10px;
    width: 60px;
    height: 60px;
    align-items: center;
    border: 2px solid   ${!selected ? Colors.secondary.dark : '#d8b578'};
    background-color: ${!selected ? '#a28859' : Colors.primary.contrastText};
    border-radius: 40px;
    margin: 10px;
    /* opacity: ${!selected ? 0.5 : 1}; */
  `;

  return (
    <TouchableWithoutFeedback onPress={() => onPress(lane)}>
      <LaneIcon>
        <Image
          source={imageSource}
          style={[styles.backgroundImage, {opacity: !selected ? 0.5 : 1}]}
        />
      </LaneIcon>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: 30,
    height: 30,
    margin: 5,
  },
});
