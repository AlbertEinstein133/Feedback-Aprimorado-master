import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { ThemedView } from '../components/themed-view';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Lista de imagens (mantenha sincronizada com a galeria)
const images: Record<string, ImageSourcePropType> = {
  '1': require('../assets/images/image.png'),
  '2': require('../assets/images/image copy.png'),
  '3': require('../assets/images/image copy 2.png'),
  '4': require('../assets/images/image copy 3.png'),
  '5': require('../assets/images/image copy 4.png'),
  '6': require('../assets/images/image copy 5.png'),
};

export default function ImageViewScreen() {
  const { imageId } = useLocalSearchParams();
  const router = useRouter();
  const image = images[imageId as string];

  // Se a imagem foi deletada, volta para a galeria
  useEffect(() => {
    if (!image) {
      router.back();
    }
  }, [image, router]);

  if (!image) {
    return (
      <ThemedView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>⚠️</Text>
          <Text style={styles.errorText}>Imagem não encontrada</Text>
          <Text style={styles.errorSubtext}>Esta imagem foi removida</Text>
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image 
          source={image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  image: {
    width: windowWidth - 32,
    height: windowHeight - 100,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  errorIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    fontWeight: '500',
  },
});