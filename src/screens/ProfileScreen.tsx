import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { User, RelationshipType } from '../types';

// 模拟数据，后续会从API获取
const mockUser: User = {
  id: 'user1',
  name: '张三',
  birthday: new Date('1990-01-01'),
  selectedRelationship: RelationshipType.PARENT,
  profileImage: 'https://example.com/avatar.jpg',
  bio: '喜欢阅读和旅行，希望能找到志同道合的朋友。',
  createdAt: new Date(),
  lastActive: new Date(),
};

const ProfileScreen = () => {
  const relationshipTypeText = {
    [RelationshipType.PARENT]: '父母关系',
    [RelationshipType.CHILD]: '子女关系',
    [RelationshipType.SIBLING]: '兄弟姐妹关系',
    [RelationshipType.SPOUSE]: '配偶关系',
    [RelationshipType.FRIEND]: '朋友关系',
    [RelationshipType.MENTOR]: '导师关系',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: mockUser.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{mockUser.name}</Text>
        <Text style={styles.bio}>{mockUser.bio}</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>生日</Text>
          <Text style={styles.infoValue}>
            {mockUser.birthday.toLocaleDateString('zh-CN')}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>关系类型</Text>
          <Text style={styles.infoValue}>
            {relationshipTypeText[mockUser.selectedRelationship]}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>注册时间</Text>
          <Text style={styles.infoValue}>
            {mockUser.createdAt.toLocaleDateString('zh-CN')}
          </Text>
        </View>
      </View>

      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>编辑资料</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>修改关系类型</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.logoutButton]}>
          <Text style={[styles.actionButtonText, styles.logoutButtonText]}>
            退出登录
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  infoSection: {
    padding: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  actionSection: {
    padding: 20,
  },
  actionButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ff4444',
  },
  logoutButtonText: {
    color: '#ff4444',
  },
});

export default ProfileScreen; 