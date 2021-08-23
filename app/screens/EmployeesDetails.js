import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';

const EmployeesDetails = ({route}) => {
  const [employees, setEmployees] = useState({});

  useEffect(() => {
    if (route.params) {
      setEmployees(route.params.employeeDetails);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.loginText}>Employee Details</Text>
        <View style={styles.textInputContainer}>
          <Image
            style={styles.profileImage}
            source={employees.profile_image}
            resizeMode={'contain'}
          />
          <View style={styles.sameRow}>
            <Text style={[styles.itemText, {fontWeight: 'normal'}]}>
              {'Name :'}
            </Text>
            <Text style={styles.itemText}>{employees.name}</Text>
          </View>
          <View style={styles.sameRow}>
            <Text style={[styles.itemText, {fontWeight: 'normal'}]}>
              {'Username :'}
            </Text>
            <Text style={styles.itemText}>{employees.username}</Text>
          </View>
          <View style={styles.sameRow}>
            <Text style={[styles.itemText, {fontWeight: 'normal'}]}>
              {'Email :'}
            </Text>
            <Text style={styles.itemText}>{employees.email}</Text>
          </View>
          <View style={styles.sameRow}>
            <Text style={[styles.itemText, {fontWeight: 'normal'}]}>
              {'Address :'}
            </Text>
            <Text style={styles.itemText}>
              {employees.address && employees.address.city}
            </Text>
          </View>
          <View style={styles.sameRow}>
            <Text style={[styles.itemText, {fontWeight: 'normal'}]}>
              {'Phone :'}
            </Text>
            <Text style={styles.itemText}>{employees.phone}</Text>
          </View>
          <View style={styles.sameRow}>
            <Text style={[styles.itemText, {fontWeight: 'normal'}]}>
              {'Website :'}
            </Text>
            <Text style={styles.itemText}>{employees.website}</Text>
          </View>
          <View style={styles.sameRow}>
            <Text style={[styles.itemText, {fontWeight: 'normal'}]}>
              {'Company :'}
            </Text>
            <Text style={styles.itemText}>
              {employees.company && employees.company.name}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmployeesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
  },
  safeContainer: {
    flex: 1,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputContainer: {
    marginTop: 25,
  },
  profileImage: {
    height: 25,
    width: 25,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sameRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
