export function ValidaEmail(value: string) {
  return { value: emailRegex.test(value), text: "Email inválido" }
}

export function ValidaSenha(value: string) {
  if (value.length > 8 || value.length < 64) {
    return { value: true, text: "" }
  }
  return { value: false, text: "A senha deve ter entre 8 e 64 caracteres" }
}

export function ValidaNome(value: string) {
  if (value.length > 3 || value.length < 32) {
    return { value: true, text: "" }
  }
  return { value: false, text: "O nome deve ter entre 3 e 32 caracteres" }
}

const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)