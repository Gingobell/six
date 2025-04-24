import { User, RelationshipType, RelationshipMatch } from '../types';
import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

export const calculateRelationshipCompatibility = (
  user1: User,
  user2: User,
  relationshipType: RelationshipType
): RelationshipMatch => {
  const ageDiff = differenceInYears(user1.birthday, user2.birthday);
  const monthDiff = differenceInMonths(user1.birthday, user2.birthday);
  const dayDiff = differenceInDays(user1.birthday, user2.birthday);

  let compatibilityScore = 0;
  let matchReason = '';

  switch (relationshipType) {
    case RelationshipType.PARENT:
      if (ageDiff >= 20 && ageDiff <= 40) {
        compatibilityScore = 90;
        matchReason = '年龄差适合父母关系';
      } else if (ageDiff >= 15 && ageDiff <= 45) {
        compatibilityScore = 70;
        matchReason = '年龄差在可接受范围内';
      } else {
        compatibilityScore = 30;
        matchReason = '年龄差不太适合父母关系';
      }
      break;

    case RelationshipType.CHILD:
      if (ageDiff >= 20 && ageDiff <= 40) {
        compatibilityScore = 90;
        matchReason = '年龄差适合子女关系';
      } else if (ageDiff >= 15 && ageDiff <= 45) {
        compatibilityScore = 70;
        matchReason = '年龄差在可接受范围内';
      } else {
        compatibilityScore = 30;
        matchReason = '年龄差不太适合子女关系';
      }
      break;

    case RelationshipType.SIBLING:
      if (Math.abs(ageDiff) <= 5) {
        compatibilityScore = 90;
        matchReason = '年龄差适合兄弟姐妹关系';
      } else if (Math.abs(ageDiff) <= 10) {
        compatibilityScore = 70;
        matchReason = '年龄差在可接受范围内';
      } else {
        compatibilityScore = 40;
        matchReason = '年龄差不太适合兄弟姐妹关系';
      }
      break;

    case RelationshipType.SPOUSE:
      if (Math.abs(ageDiff) <= 5) {
        compatibilityScore = 90;
        matchReason = '年龄差适合配偶关系';
      } else if (Math.abs(ageDiff) <= 10) {
        compatibilityScore = 80;
        matchReason = '年龄差在可接受范围内';
      } else {
        compatibilityScore = 50;
        matchReason = '年龄差较大';
      }
      break;

    case RelationshipType.FRIEND:
      if (Math.abs(ageDiff) <= 10) {
        compatibilityScore = 90;
        matchReason = '年龄差适合朋友关系';
      } else if (Math.abs(ageDiff) <= 15) {
        compatibilityScore = 80;
        matchReason = '年龄差在可接受范围内';
      } else {
        compatibilityScore = 60;
        matchReason = '年龄差较大但可以成为朋友';
      }
      break;

    case RelationshipType.MENTOR:
      if (ageDiff >= 10 && ageDiff <= 30) {
        compatibilityScore = 90;
        matchReason = '年龄差适合导师关系';
      } else if (ageDiff >= 5 && ageDiff <= 35) {
        compatibilityScore = 70;
        matchReason = '年龄差在可接受范围内';
      } else {
        compatibilityScore = 40;
        matchReason = '年龄差不太适合导师关系';
      }
      break;
  }

  // 考虑月份和日期的细微差异
  if (Math.abs(monthDiff) <= 6 && Math.abs(dayDiff) <= 15) {
    compatibilityScore += 5;
    matchReason += '，生日相近增加匹配度';
  }

  return {
    user: user2,
    compatibilityScore: Math.min(compatibilityScore, 100),
    matchReason
  };
};

export const findBestMatches = (
  currentUser: User,
  potentialMatches: User[],
  relationshipType: RelationshipType,
  limit: number = 3
): RelationshipMatch[] => {
  const matches = potentialMatches
    .map(user => calculateRelationshipCompatibility(currentUser, user, relationshipType))
    .sort((a, b) => b.compatibilityScore - a.compatibilityScore);

  return matches.slice(0, limit);
}; 