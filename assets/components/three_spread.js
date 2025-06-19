import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {TAROT_CARDS} from './tarotcards';

const LABELS = ['과거', '현재', '미래'];

function shuffle(array) {
  // Fisher-Yates 알고리즘 (카드 중복 없이 랜덤 뽑기)
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ThreeCardSpread() {
  const [pickedCards, setPickedCards] = useState([]);

  function pickThreeCards() {
    const shuffled = shuffle(TAROT_CARDS);
    setPickedCards(shuffled.slice(0, 3));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>3카드 스프레드 (과거-현재-미래)</Text>
      <View style={styles.cardRow}>
        {pickedCards.length === 3 ? pickedCards.map((card, idx) => (
          <View key={card.name} style={styles.cardBox}>
            {card.image ? (
              <Image source={card.image} style={styles.img} resizeMode="contain" />
            ) : (
              <Text style={styles.cardName}>이미지 없음</Text>
            )}
            <Text style={styles.cardLabel}>{LABELS[idx]}</Text>
            <Text style={styles.cardName}>{card.name}</Text>
          </View>
        )) : (
          <Text style={{ margin: 12 }}>카드를 뽑아보세요</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={pickThreeCards}>
        <Text style={styles.buttonText}>3장 뽑기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 18 },
  cardRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginVertical: 18 },
  cardBox: { alignItems: 'center', marginHorizontal: 8 },
  img: { width: 90, height: 140, marginBottom: 6, borderRadius: 6 },
  cardLabel: { fontSize: 16, color: '#888', marginBottom: 2 },
  cardName: { fontSize: 14, color: '#333' },
  button: { backgroundColor: '#563d7c', padding: 12, borderRadius: 8, marginTop: 15 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});