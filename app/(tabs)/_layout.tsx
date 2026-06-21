import { Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

interface TabConfig {
  name: string;
  title: string;
  icon: IoniconName;
  iconFocused: IoniconName;
}

/**
 * V2 — Navigation à 5 piliers (au lieu de 8 onglets).
 *   Accueil · Apprendre · Reviser · Decouvrir · Profil
 *
 * Les ecrans existants ne sont PAS supprimes : Lecon, Vocabulaire, Verbes,
 * Grammaire, Quiz et Ecriture restent des routes accessibles (depuis les hubs
 * Apprendre et Reviser), mais sont retires de la barre d'onglets via href:null.
 * Aucune fonctionnalite perdue, navigation simplifiee.
 */

// Les 5 piliers visibles dans la barre d'onglets, dans l'ordre.
const TABS: TabConfig[] = [
  { name: 'index',     title: 'Accueil',   icon: 'home-outline',    iconFocused: 'home' },
  { name: 'apprendre', title: 'Apprendre', icon: 'book-outline',    iconFocused: 'book' },
  { name: 'revisions', title: 'Réviser',   icon: 'school-outline',  iconFocused: 'school' },
  { name: 'decouvrir', title: 'Découvrir', icon: 'compass-outline', iconFocused: 'compass' },
  { name: 'profil',    title: 'Profil',    icon: 'person-outline',  iconFocused: 'person' },
];

// Ecrans conserves mais masques de la barre d'onglets (accessibles via les hubs).
const HIDDEN_ROUTES: string[] = [
  'lecon',
  'vocabulaire',
  'verbes',
  'grammaire',
  'quiz',
  'ecriture',
  'dialogues',
  'exercices',
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Theme.colors.tabActive,
        tabBarInactiveTintColor: Theme.colors.tabInactive,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
      }}
    >
      {TABS.map(({ name, title, icon, iconFocused }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => (
              <Ionicons
                name={focused ? iconFocused : icon}
                size={size ?? 22}
                color={color}
              />
            ),
          }}
        />
      ))}

      {/* Routes conservees mais hors barre d'onglets */}
      {HIDDEN_ROUTES.map((name) => (
        <Tabs.Screen key={name} name={name} options={{ href: null }} />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Theme.colors.tabBackground,
    borderTopColor: Theme.colors.borderLight,
    borderTopWidth: 1,
    height: Platform.OS === 'ios' ? 85 : 68,
    paddingTop: 6,
    paddingBottom: Platform.OS === 'ios' ? 24 : 10,
    ...Theme.shadows.sm,
  },
  tabLabel: {
    ...TextStyles.tabLabel,
    marginTop: 2,
  },
  tabItem: {
    paddingTop: 2,
  },
});
