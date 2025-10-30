import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const characterImages = [
  require('@/assets/images/image.png'),
  require('@/assets/images/image copy.png'),
  require('@/assets/images/image copy 2.png'),
  require('@/assets/images/image copy 3.png'),
  require('@/assets/images/image copy 4.png'),
  require('@/assets/images/image copy 5.png'),
];

interface Message {
  id: string;
  text: string;
}

export default function ChatScreen() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.imageGrid} showsVerticalScrollIndicator={false}>
        <Text style={{ textAlign: 'center', marginBottom: 8 }}>6 Personagens</Text>
        <View style={styles.grid}>
          {characterImages.map((image, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={image} style={styles.characterImage} />
            </View>
          ))}
        </View>
      </ScrollView>

      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={styles.messageItem}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite..."
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <Pressable
          onPress={handleSendMessage}
          style={({ pressed }) => [
            styles.sendButton,
            pressed && styles.sendButtonPressed,
            inputText.trim() === '' && styles.sendButtonDisabled,
          ]}
          disabled={inputText.trim() === ''}
        >
          <Text style={styles.sendButtonText}>→</Text>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageGrid: {
    flex: 1,
    padding: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  imageWrapper: {
    width: '30%',
    marginVertical: 8,
    aspectRatio: 1,
  },
  characterImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  messagesContainer: {
    maxHeight: 80,
    padding: 8,
    backgroundColor: '#f5f5f5',
  },
  messageItem: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  messageText: {
    fontSize: 13,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    maxHeight: 60,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 16,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonPressed: {
    backgroundColor: '#0056B3',
  },
  sendButtonDisabled: {
    backgroundColor: '#ccc',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});