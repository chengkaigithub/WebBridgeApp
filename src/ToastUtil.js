/**
 * Create by chengkai on 2018/8/30.
 * Describe:
 */

import { Toast } from "antd-mobile-rn";

export const showToast = (info, closeBack = () => {}) => {
  Toast.info(info, 2, closeBack, false);
}

