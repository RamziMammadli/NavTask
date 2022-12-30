import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const HomeScreen = ({navigation}) => {
  const [users, setusers] = useState([]);

  const goToDetail = (createdAt, name, updatedAt, jobTitle, id) => {
    navigation.navigate('UserDetail', {
      createdAt: createdAt,
      name: name,
      updatedAt: updatedAt,
      jobTitle: jobTitle,
      id: id,
    });
  };

  const goToCreateUser = () => {
    navigation.navigate('CreateUser')
  }

  const goToUpdateUser = () => {
    navigation.navigate('UpdateScreen')
  }
 
  useEffect(() => {
    getusers();
  }, []);

  const getusers = () => {
    fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/users')
      .then(res => res.json())
      .then(data => {
        setusers(data);
      });
  };

  const DeleteUser = (id) => {
    fetch(`https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/users/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status == 200) {
        getusers();
      }
    });
  };

  const renderItem = ({item}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              goToDetail(
                item.createdAt,
                item.name,
                item.updatedAt,
                item.jobTitle,
                item.id,
              )
            }>
            <Text style={{fontSize: 18}}>{item.name}</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '30%',
            }}>
            <Button title="Delete" onPress={() => DeleteUser(item.id)}/>
            <Button title="Update" onPress={() => goToUpdateUser()}/>
          </View>
        </View>
      </>
    );
  };

  return (
    <View>
      <View style={{alignItems:'center', paddingVertical:25}}>
        <TouchableOpacity style={{backgroundColor:'red', padding:15, borderRadius:10}} onPress={() => goToCreateUser()}>
            <Text style={{fontSize:28, color:'white'}}>Create User</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{paddingLeft:15, fontSize:30, fontWeight:'bold'}}>Users</Text>
        <FlatList data={users} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default HomeScreen;
