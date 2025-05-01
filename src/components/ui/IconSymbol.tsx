import { OpaqueColorValue } from 'react-native';
import { StyleProp, TextStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SymbolWeight } from 'expo-symbols';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  "cutlery.fill": "cutlery",
  'gearshape.fill': 'settings',
  'person.fill': 'person',
  'heart.fill': 'favorite',
  'star.fill': 'star',
  'bell.fill': 'notifications',
  'magnifyingglass': 'search',
  'plus.circle.fill': 'add',
  'minus.circle.fill': 'remove',
  'xmark.circle.fill': 'cancel',
  'checkmark.circle.fill': 'check-circle',
  'info.circle.fill': 'info',
  'exclamationmark.triangle.fill': 'warning',
  'clock.fill': 'history',
  'location.fill': 'place',
  'tag.fill': 'local-offer',
  'camera.fill': 'camera',
  'trash.fill': 'delete',
  'folder.fill': 'folder',
  'envelope.fill': 'email',
  'lock.fill': 'lock',
  'unlock.fill': 'lock-open',
  'eye.fill': 'visibility',
  'eye.slash.fill': 'visibility-off',
  'pencil': 'edit',
  'square.and.arrow.up.fill': 'share',
  'arrow.down.doc.fill': 'file-download',
  'arrow.up.doc.fill': 'file-upload',
  'list.bullet': 'list',
  'grid.fill': 'grid-view',
  'music.note.list': 'library-music',
  'film.fill': 'movie',
  'gamecontroller.fill': 'games',
  'book.fill': 'book',
  'wifi': 'wifi',
  'battery.full': 'battery-full',
  'speaker.wave.2.fill': 'volume-up',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING?.[name]} style={style} />;
}