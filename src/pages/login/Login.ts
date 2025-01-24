


export default defineComponent({
  name: 'Login',
  setup(){
    const email = ref<string>('');
    const password = ref<string>('')
    const loading = ref<boolean>(false);

    const required = (input: string) => {
      return !!input || 'Campo Obrigatório'
    }

    const onSubmit = () => {
      if (email.value && password.value) {
        loading.value = true;
        console.log(email.value + password.value)
      }
    }
    return {
      email,
      password,
      required,
      loading,
      onSubmit
    }
  }
})