import AuthenticationService from "@/shared/services/auth/AuthenticationService";
import Error from "@/shared/models/Error";
import EnumHttpErros from "@/shared/enums/errors/EnumHttpErrors";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'Login',
  setup(){
    const email = ref<string>('');
    const password = ref<string>('')
    const loading = ref<boolean>(false);
    const snackbar = ref<boolean>(false)
    const timeout = ref<number>(2000);
    const errorText = ref<string>('');
    const router = useRouter()
    const required = (input: string) => {
      return !!input || 'Campo Obrigatório'
    }

    const onSubmit = async () => {
      if (email.value && password.value) {
        try {
          loading.value = true;
          await AuthenticationService.login(email.value, password.value);
          router.push('/home');

        } catch (error) {
          if (error instanceof Error && (error.response.status === EnumHttpErros.Unauthorized || error.response.status === EnumHttpErros.BadRequest)) {
            errorText.value = "Usuário ou senha incorretos"
            snackbar.value = true;
          } else {
            errorText.value = "Erro no servidor, tente novamente mais tarde"
            snackbar.value = true;
          }
        } finally {
          loading.value = false; // Desativa o estado de carregamento
        }
      }
    }
    return {
      email,
      password,
      required,
      loading,
      onSubmit,
      snackbar,
      timeout,
      errorText
    }
  }
})