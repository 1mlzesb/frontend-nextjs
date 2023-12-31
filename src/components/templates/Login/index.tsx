import { Button } from "@/components/atoms/Button";
import { TextboxWithError } from "@/components/molecules/TextboxWithError";
import { useToastAction } from "@/components/providers/ToastProvider";
import { Input, InputSchema, postLogin } from "@/services/client/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const defaultValues: Input = {
  email: "",
  password: "",
};

export const Login = () => {
  const { showToast } = useToastAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(InputSchema),
  });
  return (
    <form
      className={styles.module}
      onSubmit={handleSubmit(async (values) => {
        try {
          const data = await postLogin(values);
          window.location.href = data.redirectUrl;
        } catch (err) {
          showToast({ message: "로그인에 실패했습니다", style: "failed" });
        }
      })}
    >
      <div className={styles.image}></div>
      <div className={styles.inputs}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>로그인</legend>
          <div className={styles.email}>
            <label htmlFor="email">메일주소</label>
            <TextboxWithError
              {...register("email")}
              id="email"
              type="text"
              placeholder="example@test.com"
              error={errors.email?.message}
            />
          </div>
          <div className={styles.password}>
            <label htmlFor="password">비밀번호</label>
            <TextboxWithError
              {...register("password")}
              id="password"
              type="password"
              placeholder="8자 이상"
              error={errors.password?.message}
            />
          </div>
        </fieldset>
        <Button variant="large" className={styles.button}>
          로그인
        </Button>
      </div>
    </form>
  );
};
