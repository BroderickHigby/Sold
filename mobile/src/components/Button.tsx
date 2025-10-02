import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: theme.borderRadius.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const sizeStyles = {
      sm: { paddingHorizontal: theme.spacing.md, paddingVertical: theme.spacing.sm, height: 36 },
      md: { paddingHorizontal: theme.spacing.lg, paddingVertical: theme.spacing.md, height: 48 },
      lg: { paddingHorizontal: theme.spacing.xl, paddingVertical: theme.spacing.lg, height: 56 },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...(fullWidth && { width: '100%' }),
      ...(disabled && { opacity: 0.5 }),
    };
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...theme.textStyles.button,
      fontWeight: '600',
    };

    const variantStyles: Record<string, TextStyle> = {
      primary: { color: theme.colors.textDark },
      secondary: { color: theme.colors.textDark },
      outline: { color: theme.colors.primary },
      ghost: { color: theme.colors.primary },
    };

    return { ...baseStyle, ...variantStyles[variant] };
  };

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[getButtonStyle(), style]}
      >
        <LinearGradient
          colors={theme.gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFill, { borderRadius: theme.borderRadius.lg }]}
        />
        {loading ? (
          <ActivityIndicator color={theme.colors.textDark} />
        ) : (
          <Text style={getTextStyle()}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }

  if (variant === 'outline') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[
          getButtonStyle(),
          {
            backgroundColor: theme.colors.transparent,
            borderWidth: 2,
            borderColor: theme.colors.primary,
          },
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={theme.colors.primary} />
        ) : (
          <Text style={getTextStyle()}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }

  if (variant === 'ghost') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[getButtonStyle(), { backgroundColor: theme.colors.transparent }, style]}
      >
        {loading ? (
          <ActivityIndicator color={theme.colors.primary} />
        ) : (
          <Text style={getTextStyle()}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[getButtonStyle(), { backgroundColor: theme.colors.secondary }, style]}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.textDark} />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
