'use strict';

import { Platform } from 'react-native';
import defaultStyle from './default.native';

export default {
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 64 : 54,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: defaultStyle.toast_zindex
  },
  innerContainer: {
    backgroundColor: 'transparent'
  },
  innerWrap: {
    alignItems: 'center',
    backgroundColor: defaultStyle.toast_fill,
    minWidth: 100
  },
  iconToast: {
    borderRadius: defaultStyle.radius_lg,
    padding: defaultStyle.v_spacing_lg
  },
  textToast: {
    borderRadius: defaultStyle.radius_sm,
    paddingVertical: defaultStyle.v_spacing_md,
    paddingHorizontal: defaultStyle.v_spacing_lg
  },
  content: {
    color: defaultStyle.color_text_base_inverse,
    fontSize: defaultStyle.font_size_subhead
  },
  image: {
    width: defaultStyle.icon_size_lg,
    height: defaultStyle.icon_size_lg,
    marginBottom: defaultStyle.v_spacing_xs
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: defaultStyle.v_spacing_md
  }
};