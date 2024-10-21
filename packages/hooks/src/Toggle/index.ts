import { useMemo, useState } from 'react';

export interface Actions<T> {
  //切换到左侧
  setLeft: () => void;
  //切换到右侧
  setRight: () => void;
  //确定 向哪边切换
  set: (value: T) => void;
  // 切换
  toggle: () => void;
}

//1.默认boolean 通过boolean类型做切换
function useToggle<T = boolean>(): [boolean, Actions<T>];
//2.给一个默认值的情况
function useToggle<T>(defaultValue: T): [T, Actions<T>];
//3.传递两个值的情况
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];
//4.代码的实现
function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  //要么D要么R,两者之间切换
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    //reverseValue为空，默认是 defaultValue的非
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    
    //值要么是左，要么是右
    const set = (value: D | R) => setState(value);
    //把状态切换成D，不就好了
    const setLeft = () => setState(defaultValue);
    //把状态切换成R，不就好了
    const setRight = () => setState(reverseValueOrigin);

    return {
      toggle,
      set,
      setLeft,
      setRight,
    };
  }, []);

  return [state, actions];
}

export default useToggle;
