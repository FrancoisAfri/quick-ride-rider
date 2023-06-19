
import { StyleSheet } from 'react-native';
import { WebView,ActivityIndicator, View } from 'react-native-webview';
import config from './config';


export default function App() {
  return (
    <WebView 
      startInLoadingState={true}
      style={styles.container}
      source={{ uri: config.domain+"?mobileapp=true" }}
      
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
