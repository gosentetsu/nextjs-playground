"use client";

import React from "react";
import { current, original, produce } from "immer";
export default function immerjs() {
  const base = {
    x: {
      y: 0
    },
    z: {
      zz: 0
    }
  };

  const inc  = (state: typeof base) => state.x.y++;
  const next = produce(base, (draft) => {
    console.log('draft', draft);  // proxy对象
    inc(draft); // 函数内操作的是proxy 可以给x+1
    const cur = current(draft); // cur是纯对象 完整拷贝了所有的值
    console.log('===', cur.z=== original(draft)?.z);
    console.log('cur->', cur); // 初始是1 后续 改为了2 
    inc(cur);
    console.log('cur', cur);// 2
    console.log('draft', current(draft)); // 1
  });
  console.log('next', next) // 1
  return <div>immerjs</div>;
}
