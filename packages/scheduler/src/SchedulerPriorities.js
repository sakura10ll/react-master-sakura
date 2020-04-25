/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type PriorityLevel = 0 | 1 | 2 | 3 | 4 | 5;
// 调度器 
// TODO: Use symbols?
export const NoPriority = 0;  
export const ImmediatePriority = 1;  // 立即执行优先级，需要同步执行的任务。
export const UserBlockingPriority = 2;  // 用户阻塞型优先级（250 ms 后过期），需要作为用户交互结果运行的任务（例如，按钮点击）。
export const NormalPriority = 3; // 普通优先级（5 s 后过期），不必让用户立即感受到的更新。
export const LowPriority = 4;  // 低优先级（10 s 后过期），可以推迟但最终仍然需要完成的任务（例如，分析通知）。
export const IdlePriority = 5; // 空闲优先级（永不过期），不必运行的任务（例如，隐藏界面以外的内容）。
