import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const ColorsPick = ({selectedColor, setColor}) => {
  const colors1 = [
    '#d50000',
    '#c51162',
    '#aa00ff',
    '#6200ea',
    '#304ffe',
    '#2962ff',
    '#0091ea',
    '#00b8d4',
  ];
  const colors2 = [
    '#00bfa5',
    '#00c853',
    '#64dd17',
    '#aeea00',
    '#ffd600',
    '#ffab00',
    '#ff6d00',
    '#ffffff',
  ];
  return (
    <View style={styles.container}>
      <View style={styles.colorRow}>
        {colors1.map(color => (
          <TouchableHighlight onPress={() => setColor(color)}>
            <ColorBox color={color} />
          </TouchableHighlight>
        ))}
      </View>
      <View style={styles.colorRow}>
        {colors2.map(color => (
          <TouchableHighlight onPress={() => setColor(color)}>
            <ColorBox color={color} />
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.background.body,
    flexDirection: 'column',
    marginTop: 50,
  },
  colorRow: {
    width: '100%',
    flexDirection: 'row',
  },
});

const ColorBox = styled(View)`
  background-color: ${props => props.color};
  width: 40px;
  height: 40px;
  margin: 2px;
`;
