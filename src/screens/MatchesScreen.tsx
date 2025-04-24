import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RelationshipMatch } from '../types';

// 模拟数据，后续会从API获取
const mockMatches: RelationshipMatch[] = [
  {
    user: {
      id: '1',
      name: '张三',
      birthday: new Date('1990-01-01'),
      selectedRelationship: 'parent',
      profileImage: 'https://example.com/image1.jpg',
      bio: '喜欢阅读和旅行',
      createdAt: new Date(),
      lastActive: new Date(),
    },
    compatibilityScore: 95,
    matchReason: '年龄差适合父母关系，生日相近增加匹配度',
  },
  {
    user: {
      id: '2',
      name: '李四',
      birthday: new Date('1992-05-15'),
      selectedRelationship: 'parent',
      profileImage: 'https://example.com/image2.jpg',
      bio: '热爱运动和音乐',
      createdAt: new Date(),
      lastActive: new Date(),
    },
    compatibilityScore: 88,
    matchReason: '年龄差在可接受范围内',
  },
  {
    user: {
      id: '3',
      name: '王五',
      birthday: new Date('1988-12-20'),
      selectedRelationship: 'parent',
      profileImage: 'https://example.com/image3.jpg',
      bio: '喜欢烹饪和摄影',
      createdAt: new Date(),
      lastActive: new Date(),
    },
    compatibilityScore: 82,
    matchReason: '年龄差在可接受范围内',
  },
];

const MatchesScreen = () => {
  const handleSelectMatch = (match: RelationshipMatch) => {
    // 这里后续会添加选择匹配的逻辑
    console.log('Selected match:', match);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>今日推荐</Text>
      <Text style={styles.subtitle}>这些用户与您选择的关系类型最匹配</Text>
      
      <ScrollView style={styles.scrollView}>
        {mockMatches.map((match) => (
          <TouchableOpacity
            key={match.user.id}
            style={styles.matchCard}
            onPress={() => handleSelectMatch(match)}
          >
            <Image
              source={{ uri: match.user.profileImage }}
              style={styles.profileImage}
            />
            <View style={styles.matchInfo}>
              <Text style={styles.userName}>{match.user.name}</Text>
              <Text style={styles.userBio}>{match.user.bio}</Text>
              <View style={styles.compatibilityContainer}>
                <Text style={styles.compatibilityScore}>
                  匹配度: {match.compatibilityScore}%
                </Text>
                <Text style={styles.matchReason}>{match.matchReason}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  matchCard: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  matchInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userBio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  compatibilityContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  compatibilityScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 5,
  },
  matchReason: {
    fontSize: 14,
    color: '#666',
  },
});

export default MatchesScreen; 