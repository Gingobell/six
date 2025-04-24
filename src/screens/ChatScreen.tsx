import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Message, User, RelationshipType, ChatMessage } from '../types';

// 模拟数据，后续会从API获取
const mockMessages: ChatMessage[] = [
  {
    id: '1',
    sender: {
      id: '1',
      name: '张三',
      birthday: new Date('1990-01-01'),
      selectedRelationship: RelationshipType.FRIEND,
      createdAt: new Date(),
      lastActive: new Date()
    },
    content: '你好！',
    timestamp: new Date(),
    read: true
  },
  {
    id: '2',
    sender: {
      id: '2',
      name: '李四',
      birthday: new Date('1992-05-15'),
      selectedRelationship: RelationshipType.SIBLING,
      createdAt: new Date(),
      lastActive: new Date()
    },
    content: '最近怎么样？',
    timestamp: new Date(),
    read: false
  }
];

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        sender: {
          id: 'user1', // 当前用户ID
          name: '张三',
          birthday: new Date('1990-01-01'),
          selectedRelationship: RelationshipType.PARENT,
          createdAt: new Date(),
          lastActive: new Date(),
        },
        content: message,
        timestamp: new Date(),
        read: true
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const renderMessage = ({ item }: { item: ChatMessage }) => {
    const isSender = item.sender.id === 'user1'; // 判断是否是当前用户发送的消息

    return (
      <View
        style={[
          styles.messageContainer,
          isSender ? styles.senderMessage : styles.receiverMessage,
        ]}
      >
        <Text style={styles.messageContent}>{item.content}</Text>
        <Text style={styles.messageTime}>
          {item.timestamp.toLocaleTimeString()}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
        inverted={false}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="输入消息..."
          multiline
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
          disabled={!message.trim()}
        >
          <Text style={styles.sendButtonText}>发送</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageList: {
    flex: 1,
    padding: 15,
  },
  messageContainer: {
    maxWidth: '80%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#6200ee',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  messageContent: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  messageTime: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#6200ee',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatScreen; 