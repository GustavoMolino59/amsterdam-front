import UserStorageService from "@/shared/services/auth/UserStorageService";



export default defineComponent({
  name: 'authenticated-layout',
  setup() {
    const router = useRouter()

    const drawer = ref(false); // Estado do menu lateral
    const menuItems = [
      { text: 'Home', icon: 'home', route: '/home',},
      { text: 'Financeiro', icon: 'payments',
        subMenus: [
          { text: 'Contas e Aluguel', route: '/financial/rent-and-debts'},
          { text: 'Administrar aluguel', route: '/financial/admin'}
        ]
       },
      { text: 'Relaxos', icon: 'dangerous', route: '/relaxs' },
      { text: 'Funções', icon: 'work', route: '/functions' },
      { text: 'Festas', icon: 'celebration', route: '/partys' },

    ];
    const name = UserStorageService.getName()
    const logout = () => {
      UserStorageService.removeToken();
      router.push('/')
    }
    return {
      drawer,
      menuItems,
      name,
      logout
    };
  }
})