/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
// react当前的3种模式
export type RootTag = 0 | 1 | 2;

export const LegacyRoot = 0; // 传统根
export const BlockingRoot = 1;  // 阻塞根
export const ConcurrentRoot = 2; // 并发根   Concurrent 模式是一组 React 的新功能，可帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整。
