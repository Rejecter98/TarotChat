import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {TAROT_CARDS} from './assets/components/tarotcards';
import ThreeCardSpread from './assets/components/three_spread';
import styles from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// 타로 뽑기 탭
function TarotScreen() {
  const [pickedCard, setPickedCard] = useState(null);

  const pickRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
    setPickedCard(TAROT_CARDS[randomIndex]);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>타로 카드 뽑기</Text>
    <View style={styles.cardContainer}>
      {pickedCard ? (
        <>
          {pickedCard.image && (
            <Image
              source={pickedCard.image}
              style={{ width: 150, height: 240, marginBottom: 8 }} // 원하는 크기로 조절
              resizeMode="contain"
            />
          )}
          <Text style={styles.cardName}>{pickedCard.name}</Text>
        </>
      ) : (
        <Text style={styles.cardHint}>
          여기에 카드 이미지와 이름이 표시됩니다
        </Text>
      )}
    </View>
    <TouchableOpacity style={styles.button} onPress={pickRandomCard}>
      <Text style={styles.buttonText}>타로 카드 한 장 뽑기</Text>
    </TouchableOpacity>
  </View>
  );
}

// 3장스프레드
function ResultScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>결과 보기</Text>
      <Text style={{ marginTop: 16, color: '#555' }}>
        여기에서 해석/설명을 표시할 수 있습니다.
      </Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="한장 뽑기" component={TarotScreen} />
        <Tab.Screen name="3장 스프레드" component={ThreeCardSpread} />
        <Tab.Screen name="환경 설정" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
