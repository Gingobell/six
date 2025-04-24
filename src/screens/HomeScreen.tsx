import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RelationshipMatch, RelationshipType, RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MatchCard from '../components/MatchCard';
import InsightCard from '../components/InsightCard';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// 模拟数据，后续会从API获取
const mockDailyMatches: RelationshipMatch[] = [
  {
    user: {
      id: '1',
      name: '张三',
      birthday: new Date('1990-01-01'),
      selectedRelationship: RelationshipType.PARENT,
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
      selectedRelationship: RelationshipType.PARENT,
      profileImage: 'https://example.com/image2.jpg',
      bio: '热爱运动和音乐',
      createdAt: new Date(),
      lastActive: new Date(),
    },
    compatibilityScore: 88,
    matchReason: '年龄差在可接受范围内',
  },
];

const mockInsights = [
  {
    id: '1',
    userId: '1',
    relationshipType: RelationshipType.PARENT,
    content: '在建立父母关系时，最重要的是相互理解和尊重。通过真诚的沟通，我们可以建立更深的联系。',
    likes: 128,
    comments: [],
    createdAt: new Date(),
  },
  {
    id: '2',
    userId: '2',
    relationshipType: RelationshipType.FRIEND,
    content: '朋友之间的信任是关系的基础。保持开放和诚实的态度，让友谊更加牢固。',
    likes: 89,
    comments: [],
    createdAt: new Date(),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleViewMatches = () => {
    navigation.navigate('Matches');
  };

  const handleViewCommunity = () => {
    navigation.navigate('Community');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>你好，张三</Text>
        <Text style={styles.dateText}>
          {new Date().toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>今日推荐</Text>
          <TouchableOpacity onPress={handleViewMatches}>
            <Text style={styles.seeMoreText}>查看全部</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockDailyMatches.map((match, index) => (
            <MatchCard
              key={match.user.id}
              match={match}
              index={index}
              onPress={() => navigation.navigate('Chat', { userId: match.user.id })}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>关系洞察</Text>
          <TouchableOpacity onPress={handleViewCommunity}>
            <Text style={styles.seeMoreText}>查看全部</Text>
          </TouchableOpacity>
        </View>

        {mockInsights.map((insight, index) => (
          <InsightCard
            key={insight.id}
            insight={insight}
            index={index}
            onPress={handleViewCommunity}
          />
        ))}
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Matches')}
        >
          <Text style={styles.actionButtonText}>寻找匹配</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Community')}
        >
          <Text style={styles.actionButtonText}>浏览社区</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#6c757d',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
  },
  seeMoreText: {
    fontSize: 14,
    color: '#6200ee',
  },
  quickActions: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen; 