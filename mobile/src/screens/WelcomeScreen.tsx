import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components';
import { theme } from '../theme';

const { width, height } = Dimensions.get('window');

interface WelcomeScreenProps {
  navigation: any;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={theme.gradients.spotify}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Logo/Icon */}
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>S</Text>
            </View>
            <Text style={styles.appName}>Sold</Text>
            <Text style={styles.tagline}>Sell anything, instantly</Text>
          </View>

          {/* Features */}
          <View style={styles.features}>
            <FeatureItem
              icon="📸"
              title="Snap a photo"
              description="AI analyzes and prices your item"
            />
            <FeatureItem
              icon="🚀"
              title="Auto-post everywhere"
              description="Facebook, Craigslist, OfferUp & more"
            />
            <FeatureItem
              icon="🤖"
              title="AI handles buyers"
              description="Auto-negotiate and schedule pickup"
            />
          </View>

          {/* CTA Buttons */}
          <View style={styles.actions}>
            <Button
              title="Get Started"
              onPress={() => navigation.navigate('Register')}
              variant="primary"
              size="lg"
              fullWidth
              style={styles.primaryButton}
            />
            <Button
              title="Sign In"
              onPress={() => navigation.navigate('Login')}
              variant="ghost"
              size="lg"
              fullWidth
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const FeatureItem: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <View style={styles.featureItem}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <View style={styles.featureText}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.xl,
    justifyContent: 'space-between',
    paddingVertical: theme.spacing['2xl'],
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: theme.spacing['3xl'],
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF', // White circle
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  logoText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#000000', // Black on white circle
  },
  appName: {
    ...theme.textStyles.h1,
    color: theme.colors.text, // White
    marginBottom: theme.spacing.sm,
  },
  tagline: {
    ...theme.textStyles.bodyLarge,
    color: theme.colors.textSecondary, // Gray
  },
  features: {
    marginVertical: theme.spacing.xl,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface, // Dark surface
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    ...theme.textStyles.body,
    fontWeight: '600',
    color: theme.colors.text, // White
    marginBottom: 4,
  },
  featureDescription: {
    ...theme.textStyles.bodySmall,
    color: theme.colors.textSecondary, // Gray
  },
  actions: {
    gap: theme.spacing.md,
  },
  primaryButton: {
    ...theme.shadows.lg,
  },
});
