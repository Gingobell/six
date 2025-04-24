import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RelationshipInsight } from '../types';

// 模拟数据，后续会从API获取
const mockInsights: RelationshipInsight[] = [
  {
    id: '1',
    userId: 'user1',
    relationshipType: 'parent',
    content: '作为父母关系的建立者，我学会了如何更好地倾听和理解他人。这种关系让我成长了很多。',
    likes: 128,
    comments: [
      {
        id: 'c1',
        userId: 'user2',
        content: '说得太对了！我也深有同感。',
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
  {
    id: '2',
    userId: 'user2',
    relationshipType: 'mentor',
    content: '导师关系不仅仅是知识的传授，更是一种互相成长的过程。感谢我的导师一直以来的指导。',
    likes: 95,
    comments: [],
    createdAt: new Date(),
  },
];

const CommunityScreen = () => {
  const handleLike = (insightId: string) => {
    // 这里后续会添加点赞逻辑
    console.log('Liked insight:', insightId);
  };

  const handleComment = (insightId: string) => {
    // 这里后续会添加评论逻辑
    console.log('Comment on insight:', insightId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>关系洞察</Text>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>发布</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {mockInsights.map((insight) => (
          <View key={insight.id} style={styles.insightCard}>
            <View style={styles.insightHeader}>
              <Image
                source={{ uri: 'https://example.com/avatar.jpg' }}
                style={styles.avatar}
              />
              <View style={styles.insightInfo}>
                <Text style={styles.userName}>用户名</Text>
                <Text style={styles.timestamp}>
                  {insight.createdAt.toLocaleDateString()}
                </Text>
              </View>
            </View>

            <Text style={styles.insightContent}>{insight.content}</Text>

            <View style={styles.insightFooter}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleLike(insight.id)}
              >
                <Text style={styles.actionButtonText}>
                  👍 {insight.likes}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleComment(insight.id)}
              >
                <Text style={styles.actionButtonText}>
                  💬 {insight.comments.length}
                </Text>
              </TouchableOpacity>
            </View>

            {insight.comments.length > 0 && (
              <View style={styles.commentsSection}>
                {insight.comments.map((comment) => (
                  <View key={comment.id} style={styles.comment}>
                    <Text style={styles.commentUser}>用户名</Text>
                    <Text style={styles.commentContent}>
                      {comment.content}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  postButton: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  insightCard: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  insightInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  insightContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 24,
  },
  insightFooter: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  actionButton: {
    marginRight: 20,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#666',
  },
  commentsSection: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  comment: {
    marginBottom: 10,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  commentContent: {
    fontSize: 14,
    color: '#666',
  },
});

export default CommunityScreen; 