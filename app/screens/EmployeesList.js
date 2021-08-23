import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmployeesList = props => {
  const [employees, setEmployees] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const value = await AsyncStorage.getItem('employeeArray');
        const employeesArray = JSON.parse(value);
        setEmployees(employeesArray);
      } catch (e) {}
    }
    fetchData();
  }, []);

  const onChangeSearchInput = text => {
    setSearchWord(text);
    const filtered = employees.filter(item => {
      return item.name === text || item.email === text;
    });
    if (filtered.length >= 1) setEmployees(filtered);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          didTapOnEmplyessList(item);
        }}
        style={styles.flatlistItem}>
        <Image
          style={styles.profileImage}
          source={item.profile_image}
          resizeMode={'contain'}
        />
        <View style={styles.sameRow}>
          <Text>{'Name :'}</Text>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.sameRow}>
          <Text>{'Company Name :'}</Text>
          <Text>{item.company ? item.company.name : ''}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const didTapOnEmplyessList = item => {
    props.navigation.navigate('EmployeesDetails', {employeeDetails: item});
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <TextInput
          value={searchWord}
          placeholder={'search your word'}
          onChangeText={text => {
            onChangeSearchInput(text);
          }}
          style={styles.textInput}
        />
        <FlatList
          data={employees}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default EmployeesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
  },
  safeContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatlistItem: {
    paddingVertical: 10,
    marginTop: 10,
  },
  profileImage: {
    height: 25,
    width: 25,
  },
  textInput: {
    borderWidth: 1,
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
  },
  sameRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
});
