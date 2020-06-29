import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Screen} from '../../components/Screen';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {styles} from './style/search.css';
import Icon from 'react-native-ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {Creators as leagueActions} from '../../store/ducks/league';

export function SearchScreen({}) {
  const [searchText, onChangeText] = useState('Useless Placeholder');
  const dispatch = useDispatch();
  const leagues = useSelector(state => state.league.leagues);
  const series = leagues && leagues.length > 0 ? leagues[0].series : [];
  const getLeagues = () => dispatch(leagueActions.getLeague());
  useEffect(() => getLeagues(), []);

  return (
    <Screen>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Explore</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input value={searchText} onChangeText={text => onChangeText(text)} />
        <TouchableHighlight onPress={() => getLeagues()}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={35}
            color={Colors.primary.main}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.container}>
        <Text style={styles.listTittle}>Escolha seu </Text>
        <FlatListContainer>
          <FlatList
            data={series || []}
            renderItem={({item}) => <Series series={item} />}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={() => <Separator />}
          />
        </FlatListContainer>
      </View>
    </Screen>
  );
}

const Series = ({series}) => {
  return (
    <TouchableOpacity>
      <View style={styles.seriesContainer}>
        <View style={styles.seriesInfo}>
          <Text style={styles.seriesName}>{series.full_name}</Text>
        </View>
        <View style={styles.seriesDescription}>
          <Text style={styles.seriesDescriptionText}>{series.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Separator = styled.View`
  background-color: ${Colors.primary.light};
  width: 100%;
  height: 2px;
  border-radius: 5;
`;

export const FlatListContainer = styled.View`
  background-color: ${Colors.primary.main};
  margin-top: 10px;
  width: ${Dimensions.get('window').width};
  height: 320px;
  border-color: ${Colors.primary.dark};
`;

const Input = styled(TextInput)`
  border-radius: 3px;
  flex-direction: column;
  box-shadow: 1px 1px #ccc;
  background-color: ${Colors.secondary.main};
  padding: 10px;
  width: 70%;
  margin: 20px;
  border-radius: 5px;
  color: ${Colors.secondary.contrastText};
  height: 100%;
`;
