import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useCallback, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { fonts } from '../../theme/fonts';
import { colors } from '../../theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';

type HeaderProps = {
    title?: string;
    isUserLoggedIn?: boolean;
    isSearch?: boolean;
    /** Called when the search icon is tapped (before expanding). */
    onSearchPress?: () => void;
    /** Called when the search query changes while expanded. */
    onSearchChange?: (query: string) => void;
    /** Called when the user closes expanded search (clear / collapse). */
    onSearchClose?: () => void;
    /** Called when the back button is pressed. */
    onBackPress?: () => void;
};

export function Header({
    title,
    isUserLoggedIn = false,
    isSearch = false,
    onSearchPress,
    onSearchChange,
    onSearchClose,
    onBackPress,
}: HeaderProps) {
    const insets = useSafeAreaInsets();
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const t = useCallback(
        (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
        [],
    );

    useEffect(() => {
        if (!isSearch) {
            setSearchExpanded(false);
            setSearchQuery('');
        }
    }, [isSearch]);

    const openSearch = useCallback(() => {
        onSearchPress?.();
        setSearchExpanded(true);
    }, [onSearchPress]);

    const closeSearch = useCallback(() => {
        setSearchExpanded(false);
        setSearchQuery('');
        onSearchChange?.('');
        onSearchClose?.();
    }, [onSearchChange, onSearchClose]);

    const handleQueryChange = useCallback(
        (text: string) => {
            setSearchQuery(text);
            onSearchChange?.(text);
        },
        [onSearchChange],
    );

    return (
        <View style={[styles.header, { paddingTop: Math.max(8, insets.top + 2) }]}>
            {isUserLoggedIn ? (
                <>
                    <TouchableOpacity style={styles.avatarBtn} accessibilityRole="button">
                        <MaterialDesignIcons name="account-circle" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                    <View style={styles.nameWrap}>
                        <Text style={styles.headerName}>{t('enterYourName')}</Text>
                        <MaterialDesignIcons name="pencil-outline" size={20} color="#D9F4F0" />
                    </View>
                    <View style={styles.headerActions}>
                        <TouchableOpacity style={styles.headerIconBtn} accessibilityRole="button">
                            <MaterialDesignIcons name="bell" size={18} color="#FFFFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerIconBtn} accessibilityRole="button">
                            <MaterialDesignIcons name="cog" size={18} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <View style={styles.headerContainer}>
                    {isSearch && searchExpanded ? (
                        <>
                            <View style={styles.searchRow}>
                                <TouchableOpacity
                                    style={styles.headerIconBtn}
                                    accessibilityRole="button"
                                    accessibilityLabel={t('closeSearchA11y')}
                                    onPress={closeSearch}>
                                    <AntDesign name="left" size={20} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder={t('searchPlaceholder')}
                                    placeholderTextColor="#B8E8E3"
                                    value={searchQuery}
                                    onChangeText={handleQueryChange}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="search"
                                    autoFocus
                                    accessibilityLabel={t('searchPlaceholder')}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.headerIconBtn}
                                accessibilityRole="button"
                                accessibilityLabel={t('closeSearchA11y')}
                                onPress={closeSearch}>
                                <AntDesign name="close" size={20} color="#FFFFFF" />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <View style={styles.leftArrowIcon}>
                                <TouchableOpacity style={styles.headerIconBtn} accessibilityRole="button" onPress={onBackPress}>
                                    <AntDesign name="left" size={20} color="#FFFFFF" />
                                </TouchableOpacity>
                                <Text style={styles.headerName} numberOfLines={1}>
                                    {title}
                                </Text>
                            </View>
                            {isSearch ? (
                                <TouchableOpacity
                                    style={[styles.headerIconBtn, { backgroundColor: colors.lightGreen }]}
                                    accessibilityRole="button"
                                    accessibilityLabel={t('searchPlaceholder')}
                                    onPress={openSearch}>
                                    <AntDesign name="search1" size={20} color="#FFFFFF" />
                                </TouchableOpacity>
                            ) : null}
                        </>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingBottom: 12,
        backgroundColor: colors.header,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    avatarBtn: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameWrap: {
        flex: 1,
        marginLeft: 8,
        flexDirection: 'row',
    },
    headerActions: {
        flexDirection: 'row',
        gap: 8,
    },
    headerIconBtn: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: colors.lightGreen,
    },
    headerName: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: fonts.neueHaasBold,
        fontWeight: '700',
        marginHorizontal: 10,
        flexShrink: 1,
    },
    leftArrowIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flex: 1,
    },
    searchRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        minHeight: 36,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.15)',
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: fonts.neueHaasRoman,
    },
});
