export interface User {
  id: string;
  name: string;
  birthday: Date;
  selectedRelationship: RelationshipType;
  profileImage?: string;
  bio?: string;
  createdAt: Date;
  lastActive: Date;
}

export enum RelationshipType {
  PARENT = 'parent',
  CHILD = 'child',
  SIBLING = 'sibling',
  SPOUSE = 'spouse',
  FRIEND = 'friend',
  MENTOR = 'mentor'
}

export interface RelationshipMatch {
  user: User;
  compatibilityScore: number;
  matchReason: string;
}

export interface RelationshipInsight {
  id: string;
  userId: string;
  relationshipType: RelationshipType;
  content: string;
  likes: number;
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: Date;
}

export interface ChatMessage {
  id: string;
  sender: User;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface DailyMatch {
  date: Date;
  matchedUsers: User[];
  selectedUser?: User;
}

export type RootStackParamList = {
  Home: undefined;
  Chat: { userId: string };
  Matches: undefined;
  Community: undefined;
}; 