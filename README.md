# Galeria de Imagens com Gestos

Este projeto implementa uma galeria de imagens interativa em React Native com funcionalidades avançadas de interação e feedback ao usuário.

## Funcionalidades Implementadas

### 1. Visualização em Grid
- Exibição de imagens em uma grade responsiva
- 2 colunas com dimensionamento automático
- Espaçamento e bordas arredondadas para melhor visual

### 2. Interações
- **Toque Simples**: Abre a imagem em tela cheia
- **Duplo Toque**: Exibe o menu de exclusão da imagem
- Feedback visual ao tocar nas imagens
- Animações suaves nas transições

### 3. Exclusão de Imagens
- Interface intuitiva para exclusão
- Overlay de confirmação
- Animações durante o processo
- Feedback visual claro

### 4. Estado Vazio
- Mensagem amigável quando não há imagens
- Interface limpa e informativa

## Screenshots

[Aqui você deve adicionar screenshots do seu app mostrando:]
1. Tela principal com a grade de imagens
2. Visualização em tela cheia
3. Menu de exclusão ativo
4. Estado vazio (quando não há imagens)

## Como Começar

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Tecnologias Utilizadas

- React Native
- Expo Router para navegação
- Componentes Themed para suporte a temas
- Animações nativas para feedback visual
- TypeScript para tipo seguro

## Estrutura do Projeto

```
app/
  ├── gallery.tsx         # Componente principal da galeria
  ├── image-view.tsx      # Visualização em tela cheia
  └── (tabs)/
      └── index.tsx       # Ponto de entrada da aplicação
```

## Desafios e Soluções

### Interações Gestuais
- Implementação de detecção de duplo toque para melhor experiência do usuário
- Feedback visual imediato para todas as interações

### Gerenciamento de Estado
- Uso de `useState` para controle dinâmico da lista de imagens
- Estado local para controle de interações

### Design Responsivo
- Cálculo dinâmico do tamanho das imagens baseado na largura da tela
- Layout adaptativo para diferentes tamanhos de tela

## Melhorias Futuras

- [ ] Adicionar suporte para upload de novas imagens
- [ ] Implementar zoom na visualização em tela cheia
- [ ] Adicionar mais opções de interação
- [ ] Suporte para arrastar e reorganizar imagens

## Autor

[Seu Nome]

## Licença

Este projeto está sob a licença MIT.



<img width="348" height="565" alt="image" src="https://github.com/user-attachments/assets/472b53be-128b-428d-a2ca-3724949295fc" />

