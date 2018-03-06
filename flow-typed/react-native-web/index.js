
// import {EdgeInsetsProp} from "react-native-web";
//
// declare module 'react-native-web' {
//
//     declare type ViewLayout = {
//         x: number,
//         y: number,
//         width: number,
//         height: number
//     }
//
//     declare type ViewLayoutEvent = {
//         nativeEvent: {
//             layout: ViewLayout
//         }
//     }
//
//     declare type ViewProps = {
//         accessibilityComponentType?: string,
//         accessibilityLabel?: string,
//         accessibilityLiveRegion?: 'none' | 'polite' | 'assertive',
//         accessibilityRole?: string,
//         accessibilityTraits?: string | Array<string>,
//         accessible?: boolean,
//         children?: any,
//         hitSlop?: EdgeInsetsProp,
//         importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants',
//         onBlur?: Function,
//         onClick?: Function,
//         onClickCapture?: Function,
//         onContextMenu?: Function,
//         onFocus?: Function,
//         onLayout?: (event: ViewLayoutEvent) => void,
//         onResponderGrant?: Function,
//         onResponderMove?: Function,
//         onResponderReject?: Function,
//         onResponderRelease?: Function,
//         onResponderTerminate?: Function,
//         onResponderTerminationRequest?: Function,
//         onStartShouldSetResponder?: Function,
//         onStartShouldSetResponderCapture?: Function,
//         onMoveShouldSetResponder?: Function,
//         onMoveShouldSetResponderCapture?: Function,
//         onTouchCancel?: Function,
//         onTouchCancelCapture?: Function,
//         onTouchEnd?: Function,
//         onTouchEndCapture?: Function,
//         onTouchMove?: Function,
//         onTouchMoveCapture?: Function,
//         onTouchStart?: Function,
//         onTouchStartCapture?: Function,
//         pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto',
//         //TODO uncomment:style?: stylePropType,
//         testID?: string,
//         // compatibility with React Native
//         accessibilityViewIsModal?: boolean,
//         collapsable?: boolean,
//         needsOffscreenAlphaCompositing?: boolean,
//         onAccessibilityTap?: Function,
//         onMagicTap?: Function,
//         removeClippedSubviews?: boolean,
//         renderToHardwareTextureAndroid?: boolean,
//         shouldRasterizeIOS?: boolean
//     }
//
//     declare export class View extends React$Component<ViewProps>{}
// }