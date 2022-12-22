import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { Container } from '../styles/MessagesStyles';
import { Card } from '../styles/MessagesStyles';
import { UserInfo } from '../styles/MessagesStyles';
import { UserImgWrapper } from '../styles/MessagesStyles';
import { UserImg } from '../styles/MessagesStyles';
import { UserInfoText } from '../styles/MessagesStyles';
import { UserName } from '../styles/MessagesStyles';
import { PostTime } from '../styles/MessagesStyles';
import { MessageText } from '../styles/MessagesStyles';
import { TextSection } from '../styles/MessagesStyles';
import ChatScreen from './ChatScreen';

const Messages = [
  {
    id: '1',
    userName: 'Manar',
    userImg: require('../assets/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Sara',
    userImg: require('../assets/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Rand',
    userImg: require('../assets/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Mohammed',
    userImg: require('../assets/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('chat')}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});