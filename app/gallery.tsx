
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';

interface ImageItem {
  id: string;
  uri: ImageSourcePropType;
}

// Lista inicial de imagens
const initialImages: ImageItem[] = [
  { id: '1', uri: require('../assets/images/image.png') },
  { id: '2', uri: require('../assets/images/image copy.png') },
  { id: '3', uri: require('../assets/images/image copy 2.png') },
  { id: '4', uri: require('../assets/images/image copy 3.png') },
  { id: '5', uri: require('../assets/images/image copy 4.png') },
  { id: '6', uri: require('../assets/images/image copy 5.png') },
];

const COLUMN_NUM = 2;

export default function GalleryScreen() {
  const [images, setImages] = useState<ImageItem[]>(initialImages);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleLongPress = (imageId: string) => {
    setSelectedImageId(imageId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedImageId) {
      setImages(current => current.filter(img => img.id !== selectedImageId));
    }
    setShowDeleteModal(false);
    setSelectedImageId(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedImageId(null);
  };

  const renderItem = ({ item }: { item: ImageItem }) => (
    <View style={styles.imageContainer}>
      <Link href={{ pathname: '/image-view', params: { imageId: item.id } }} asChild>
        <Pressable
          onLongPress={() => handleLongPress(item.id)}
          style={({ pressed }) => [
            styles.imageWrapper,
            pressed && styles.pressed
          ]}
        >
          <Image source={item.uri} style={styles.image} />
        </Pressable>
      </Link>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      {images.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIconContainer}>
            <ThemedText style={styles.emptyIcon}>📸</ThemedText>
          </View>
          <ThemedText style={styles.emptyText}>
            Nenhuma imagem na galeria
          </ThemedText>
          <ThemedText style={styles.emptySubtext}>
            Adicione algumas imagens para começar!
          </ThemedText>
        </View>
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={COLUMN_NUM}
          contentContainerStyle={styles.list}
          scrollIndicatorInsets={{ right: 1 }}
        />
      )}

      {/* Modal de Confirmação de Exclusão */}
      <Modal
        visible={showDeleteModal}
        transparent
        animationType="fade"
        onRequestClose={handleCancelDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <Text style={styles.modalIcon}>🗑️</Text>
            </View>
            <ThemedText style={styles.modalTitle}>Excluir Imagem?</ThemedText>
            <ThemedText style={styles.modalMessage}>
              Tem certeza de que deseja excluir esta imagem? Esta ação não pode ser desfeita.
            </ThemedText>
            
            <View style={styles.modalButtons}>
              <Pressable
                onPress={handleCancelDelete}
                style={({ pressed }) => [
                  styles.button,
                  styles.cancelButton,
                  pressed && styles.cancelButtonPressed
                ]}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </Pressable>
              
              <Pressable
                onPress={handleConfirmDelete}
                style={({ pressed }) => [
                  styles.button,
                  styles.deleteButtonConfirm,
                  pressed && styles.deleteButtonPressed
                ]}
              >
                <Text style={styles.deleteButtonText}>Excluir</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 12,
    paddingTop: 16,
  },
  imageContainer: {
    flex: 1,
    margin: 8,
    aspectRatio: 1,
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  emptyIconContainer: {
    marginBottom: 20,
    padding: 20,
  },
  emptyIcon: {
    fontSize: 80,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  emptySubtext: {
    fontSize: 16,
    opacity: 0.6,
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '500',
  },
  // Estilos do Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 28,
    width: '85%',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  modalIconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  modalIcon: {
    fontSize: 48,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16,
    color: '#1a1a1a',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 15,
    marginBottom: 28,
    lineHeight: 24,
    color: '#555',
    fontWeight: '500',
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1.5,
    borderColor: '#ddd',
  },
  cancelButtonPressed: {
    backgroundColor: '#e8e8e8',
    opacity: 0.9,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  deleteButtonConfirm: {
    backgroundColor: '#ff4757',
  },
  deleteButtonPressed: {
    backgroundColor: '#ff3838',
    opacity: 0.9,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});