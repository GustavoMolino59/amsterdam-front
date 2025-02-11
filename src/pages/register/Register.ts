import { useRouter } from 'vue-router';
import EnumHttpErros from "@/shared/enums/errors/EnumHttpErrors";
import Error from "@/shared/models/Error";
import { UsersService } from "@/shared/services/users/UsersService";
import type { SubmitEventPromise } from "vuetify";



export default defineComponent({
  name: 'Login',
  setup(){
    const name = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const confirmPassword = ref<string>('');
    const year = ref<number>(new Date().getFullYear());
    const snackbar = ref<boolean>(false)
    const timeout = ref<number>(2000);
    const snackBarText = ref<string>('');
    const loading = ref<boolean>(false);
    const theme = ref<string>('');
    const router = useRouter()
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
    const submit = async (submitEventPromise: SubmitEventPromise) => {
      const {valid } = await submitEventPromise
      if ( valid) {
        loading.value = true;
        const params = {
          name: name.value,
          password: password.value,
          year: year.value,
          email: email.value
        }
        try {
          await UsersService.create(params)
        } catch (error) {
          if (error instanceof Error && (error.response.status === EnumHttpErros.Unauthorized || error.response.status === EnumHttpErros.BadRequest)) {
            snackBarText.value = "Erro interno, tente novamente mais tarde"
            snackbar.value = true;
            theme.value = 'error'
          }
        } finally {
          loading.value = false;
          theme.value = 'success';
          snackBarText.value = 'Usuário criado com Sucesso';
          snackbar.value = true;
          setTimeout(() => {
            router.push('/login');
          }, 3000); 
        }
      } 
    };
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
      isPasswordConfirmedOkay,
      snackbar,
      timeout,
      snackBarText,
      theme
    }
  }
})