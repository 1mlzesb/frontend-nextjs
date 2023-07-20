import { ReactNode } from "react";
import { Toast } from "./Toast";
import {
  ToastActionContext,
  ToastState,
  ToastStateContext,
  ToastStyle,
} from "./ToastContext";
import { useToastProvider } from "./useToastProvider";
export { useToastAction, useToastState } from "./hooks";
export type { ToastState, ToastStyle };

/* 리스트 7-4
const { showToast } = useToastAction();
const onSubmit = handleSubmit(async () => {
  try {
    // ...Web API로 값을 제출한다
    showToast({ message: "저장되었습니다", style: "succeed" });
  } catch (err) {
    showToast({ message: "에러가 발생했습니다", style: "failed" });
  }
});
*/

export const ToastProvider = ({
  children,
  defaultState,
}: {
  children: ReactNode;
  defaultState?: Partial<ToastState>;
}) => {
  const { isShown, message, style, showToast, hideToast } =
    useToastProvider(defaultState);
  return (
    <ToastStateContext.Provider value={{ isShown, message, style }}>
      <ToastActionContext.Provider value={{ showToast, hideToast }}>
        {children}
        {/* isShown이 true가 되면 표시된다 */}
        {isShown && <Toast message={message} style={style} />}
      </ToastActionContext.Provider>
    </ToastStateContext.Provider>
  );
};
