import {
  TextInput,
  TextAreaInput,
  SelectInput,
  EmailInput,
  PasswordInput,
  PriceInput,
} from "../../../base/inputs/inputsGPT";


export const InpS = () => {
  return (
    <div>           
        <TextInput label="Имя" placeholder="Введите имя" />
        <TextInput label="Email" placeholder="Введите email" type="email" />
        <TextInput label="Пароль" placeholder="Введите пароль" type="password" />
    </div>
  );
}