import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const UserDetail = ({ route }) => {

  let { createdAt } = route.params
  let { name } = route.params
  let { updatedAt } = route.params
  let { jobTitle } = route.params
  let { id } = route.params
  return (
      <View>
          <Text style={{fontSize:26, paddingHorizontal:20}}>Username: {name}</Text>
          <Text style={{fontSize:18, paddingHorizontal:20}}>Job title: {jobTitle}</Text>
          <Text style={{fontSize:18, paddingHorizontal:20}}>Created: {createdAt}</Text>
          <Text style={{fontSize:18, paddingHorizontal:20}}>Updated: {updatedAt}</Text>
          <Text style={{fontSize:18, paddingHorizontal:20}}>ID: {id}</Text>
      </View>
  )
} 

export default UserDetail;