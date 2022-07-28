import "./index.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

function Form() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Senha obrigatório!")
      .matches(
        /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter ao menos um símbolo, letras, números  e ter no mínimo 8 caracteres!"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não são iguais!")
      .required("Confirme a senha!"),
    name: yup
      .string()
      .required("Nome de usuário obrigatório!")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "O nome pode conter apenas letras!"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  function registerUser(data) {
    history.push(`/home/${data.name}`);
  }

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div className="formAreas">
        <input
          placeholder=" "
          id="name"
          className="formInput"
          {...register("name")}
        ></input>
        <label htmlFor="name " className="formLabel">
          Nome
        </label>
      </div>
      <p className="error">{errors.name?.message}</p>

      <div className="formAreas">
        <input
          placeholder=" "
          className="formInput"
          id="email"
          {...register("email")}
        ></input>
        <label htmlFor="email " className="formLabel">
          E-mail
        </label>
      </div>
      <p className="error">{errors.email?.message}</p>

      <div className="formAreas">
        <input
          type="password"
          placeholder=" "
          className="formInput"
          {...register("password")}
        ></input>
        <label htmlFor="password" className="formLabel" id="formLabelSenha">
          Senha
        </label>
      </div>
      <p className="error">{errors.password?.message}</p>

      <div className="formAreas">
        <input
          placeholder=" "
          className="formInput"
          type="password"
          {...register("passwordConfirm")}
        ></input>
        <label
          htmlFor="passwordConfirm"
          className="formLabel"
          id="formLabelSenhaConfirm"
        >
          Confirme sua senha
        </label>
      </div>

      <p className="error" id="errorPasswordConfirm">
        {errors.passwordConfirm?.message}
      </p>

      <button type="submit" className="cadastrar">
        Cadastrar
      </button>
    </form>
  );
}
export default Form;
