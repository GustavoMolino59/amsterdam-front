import BillCard from "./components/bill-card/BillCard.vue";
import FinancialCard from "./components/financial-card/FinancialCard.vue";

export default defineComponent({
  name: 'RentsAndDebts',
  components: {
    [FinancialCard.name as string]: FinancialCard,
    [BillCard.name as string]: BillCard
  },
  setup() {
    const value = ref<number>(900)
    const object = {text: 'Pago', status: 'error'}
    return {
      value,
      object
    }
  }
})