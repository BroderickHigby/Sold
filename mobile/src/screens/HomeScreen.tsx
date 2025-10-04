import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components';
import { theme } from '../theme';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sold</Text>
          <Text style={styles.headerSubtitle}>Your Marketplace</Text>
        </View>

        {/* Main CTA - Camera */}
        <View style={styles.mainAction}>
          <View style={styles.cameraIcon}>
            <Text style={styles.cameraIconText}>📸</Text>
          </View>
          <Text style={styles.mainTitle}>Sell Something</Text>
          <Text style={styles.mainSubtitle}>
            Take a photo and AI will handle the rest
          </Text>
          <Button
            title="Take Photo"
            onPress={() => navigation.navigate('Camera')}
            variant="primary"
            size="lg"
            fullWidth
            style={styles.cameraButton}
          />
        </View>

        {/* Quick Stats */}
        <View style={styles.stats}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Active Listings</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Total Sales</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No activity yet. Start by selling your first item!
            </Text>
          </View>
        </View>

        {/* Features List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <FeatureItem
            number="1"
            title="Snap a photo"
            description="Take a picture of what you want to sell"
          />
          <FeatureItem
            number="2"
            title="AI analyzes"
            description="We identify and price your item automatically"
          />
          <FeatureItem
            number="3"
            title="Auto-post"
            description="Your listing goes live on multiple platforms"
          />
          <FeatureItem
            number="4"
            title="AI handles buyers"
            description="We negotiate and schedule pickup for you"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FeatureItem: React.FC<{
  number: string;
  title: string;
  description: string;
}> = ({ number, title, description }) => (
  <View style={styles.featureItem}>
    <View style={styles.featureNumber}>
      <Text style={styles.featureNumberText}>{number}</Text>
    </View>
    <View style={styles.featureContent}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  header: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },
  headerTitle: {
    ...theme.textStyles.h1,
    color: theme.colors.text,
  },
  headerSubtitle: {
    ...theme.textStyles.body,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  mainAction: {
    alignItems: 'center',
    paddingVertical: theme.spacing['2xl'],
    paddingHorizontal: theme.spacing.xl,
    borderWidth: 2,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.xl,
    marginBottom: theme.spacing.xl,
  },
  cameraIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  cameraIconText: {
    fontSize: 40,
  },
  mainTitle: {
    ...theme.textStyles.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  mainSubtitle: {
    ...theme.textStyles.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  cameraButton: {
    maxWidth: 300,
  },
  stats: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  statCard: {
    flex: 1,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
  },
  statNumber: {
    ...theme.textStyles.h1,
    color: theme.colors.text,
  },
  statLabel: {
    ...theme.textStyles.bodySmall,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.textStyles.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  emptyState: {
    padding: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
  },
  emptyStateText: {
    ...theme.textStyles.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  featureNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  featureNumberText: {
    ...theme.textStyles.body,
    color: theme.colors.textLight,
    fontWeight: '700',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    ...theme.textStyles.body,
    color: theme.colors.text,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDescription: {
    ...theme.textStyles.bodySmall,
    color: theme.colors.textSecondary,
  },
});
