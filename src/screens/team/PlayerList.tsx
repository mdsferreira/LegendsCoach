import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import styled from 'styled-components/native';

const datalist = [
  {
    id: 1,
    name: 'jose',
    nickName: 'nickName',
    lastName: 'Pinto',
    team: 'Pain Game',
    image: 'https://avatars0.githubusercontent.com/u/15197050?s=460&v=4',
    price: '13,23',
  },
  {
    id: 2,
    name: 'Whesley',
    lastName: 'Holler',
    nickName: 'Leko',
    team: 'Pain Game',
    image:
      'http://news.wellplayed.com.br/wp-content/uploads/2015/08/leko-2ixjzpf8-810x300.png',
    price: '3,23',
  },
  {
    id: 3,
    name: 'jose',
    team: 'Pain Game',
    image: 'https://avatars0.githubusercontent.com/u/15197050?s=460&v=4',
    price: '13,23',
  },
  {
    id: 4,
    name: 'jose',
    team: 'Pain Game',
    image: 'https://avatars0.githubusercontent.com/u/15197050?s=460&v=4',
    price: '13,23',
  },
];

export const PlayerList = ({lane, pickNewPlayer}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listTittle}>Escolha seu {lane}</Text>
      <FlatListContainer>
        <FlatList
          data={datalist}
          renderItem={({item}) => (
            <Player player={item} onPress={pickNewPlayer} />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Separator />}
        />
      </FlatListContainer>
    </View>
  );
};

const Player = ({player, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(player);
      }}>
      <View style={styles.playerContainer}>
        <Image source={{uri: player.image}} style={styles.playerPhoto} />
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>
            {player.name}{' '}
            <Text style={styles.playerNickName}>"{player.nickName}"</Text>{' '}
            {player.lastName}
          </Text>
          <Text style={styles.playerTeam}>{player.team}</Text>
        </View>
        <View style={styles.playerPrice}>
          <Text style={styles.playerPriceText}>{player.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const FlatListContainer = styled.View`
  background-color: ${Colors.teamScreen};
  margin-top: 10px;
  width: ${Dimensions.get('window').width};
  height: 320px;
  border-color: ${Colors.lightGray};
`;

export const Separator = styled.View`
  background-color: ${Colors.backgroundScreen};
  width: 100%;
  height: 2px;
  border-radius: 5;
`;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
  },
  playerPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  playerInfo: {
    height: 50,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  playerName: {
    fontSize: 14,
    color: Colors.inputGrey,
    fontFamily: 'verdana',
  },
  playerNickName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  playerTeam: {
    fontSize: 12,
    color: Colors.inputGrey,
    fontFamily: 'verdana',
  },
  playerPrice: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerPriceText: {
    fontSize: 20,
    color: Colors.gold,
    fontWeight: 'bold',
  },
  listTittle: {
    fontSize: 22,
    color: Colors.inputGrey,
    marginLeft: 20,
  },
});
