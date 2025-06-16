import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TAROT_CARDS = [
  { name: 'The Fool' },
  { name: 'The Magician' },
  { name: 'The High Priestess' },
  { name: 'The Empress' },
  { name: 'The Emperor' },
  { name: 'The Hierophant' },
  { name: 'The Lovers' },
  { name: 'The Chariot' },
  { name: 'Strength' },
  { name: 'The Hermit' },
  // ... 더 많은 카드 추가 가능
];

export default function App() {
  const [pickedCard, setPickedCard] = useState(null);

  const pickRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
    setPickedCard(TAROT_CARDS[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>타로 카드 뽑기</Text>

      <View style={styles.cardContainer}>
        {/* 카드 이미지 영역 (이미지는 여기다가 직접 Image 컴포넌트로 넣으시면 됩니다) */}
        {pickedCard ? (
          <>
            {/* 아래에 이미지 삽입하면 됨 */}
            {/* <Image source={require('./assets/fool.jpg')} style={styles.cardImage} /> */}
            <Text style={styles.cardName}>{pickedCard.name}</Text>
          </>
        ) : (
          <Text style={styles.cardHint}>여기에 카드 이미지와 이름이 표시됩니다</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={pickRandomCard}>
        <Text style={styles.buttonText}>
          타로 카드 한 장 뽑기
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// 스타일은 예시
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  cardContainer: {
    width: 250,
    height: 350,
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faf6e9',
    marginBottom: 40,
  },
  cardHint: {
    color: '#aaa',
  },
  cardName: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#bb86fc',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});