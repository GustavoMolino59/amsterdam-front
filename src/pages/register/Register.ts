


export default defineComponent({
  name: 'Login',
  setup(){
    const name = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const confirmPassword = ref<string>('');
    const year = ref<number>();

    const loading = ref<boolean>(false);

    const required = (input: string) => {
      return !!input || 'Campo Obrigatório'
    }

    const isPasswordOnTemplate = (password: string) => {
      // Regex para validar os requisitos:
      // Pelo menos 1 letra maiúscula, 1 letra minúscula, 1 caractere especial e 8+ caracteres.
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    
      return passwordRegex.test(password) || 'Senha fora do padrão';
    };
    const isPasswordConfirmedOkay = (confirmPassword:string) => {
      return password.value === confirmPassword || 'Senhas não coincidem';
    };
    const submit = (event: any) => {
      if (email.value && password.value && year.value) {
        loading.value = true;
        console.log(email.value + password.value)
      }
    }
    return {
      name,
      email,
      password,
      confirmPassword,
      year,
      required,
      loading,
      submit,
      isPasswordOnTemplate,
      isPasswordConfirmedOkay
    }
  }
})