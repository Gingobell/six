import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RelationshipType } from '../types';

const relationships = [
  {
    type: RelationshipType.PARENT,
    title: '父母关系',
    description: '寻找可以给予你父母般关爱和指导的人',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    type: RelationshipType.CHILD,
    title: '子女关系',
    title: '子女关系',
    description: '寻找可以让你付出关爱和教导的人',
    icon: '👶',
  },
  {
    type: RelationshipType.SIBLING,
    title: '兄弟姐妹关系',
    description: '寻找可以像兄弟姐妹一样互相支持的人',
    icon: '👫',
  },
  {
    type: RelationshipType.SPOUSE,
    title: '配偶关系',
    description: '寻找可以共度一生的伴侣',
    icon: '💑',
  },
  {
    type: RelationshipType.FRIEND,
    title: '朋友关系',
    description: '寻找志同道合的朋友',
    icon: '🤝',
  },
  {
    type: RelationshipType.MENTOR,
    title: '导师关系',
    description: '寻找可以指导你成长的人',
    icon: '👨‍🏫',
  },
];

const RelationshipIntroScreen = () => {
  const navigation = useNavigation();

  const handleSelectRelationship = (type: RelationshipType) => {
    // 这里后续会添加选择关系的逻辑
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>选择您想要建立的关系</Text>
      <Text style={styles.subtitle}>每种关系都有其独特的意义和价值</Text>
      
      <ScrollView style={styles.scrollView}>
        {relationships.map((relationship) => (
          <TouchableOpacity
            key={relationship.type}
            style={styles.relationshipCard}
            onPress={() => handleSelectRelationship(relationship.type)}
          >
            <Text style={styles.relationshipIcon}>{relationship.icon}</Text>
            <View style={styles.relationshipInfo}>
              <Text style={styles.relationshipTitle}>{relationship.title}</Text>
              <Text style={styles.relationshipDescription}>
                {relationship.description}
              </Text>
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  relationshipCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  relationshipIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  relationshipInfo: {
    flex: 1,
  },
  relationshipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  relationshipDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default RelationshipIntroScreen; 