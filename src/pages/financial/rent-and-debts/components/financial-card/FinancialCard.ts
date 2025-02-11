import type { IStatusData } from "./types/IStatusData";
import type { ITableData } from "./types/ITableData";

export default defineComponent({
  name: 'FinancialCard',
  props: {
    title: {
      type: String,
      required:true
    },
    value: {
      type: Number,  // Define que 'value' deve ser um número
      required: true // Opcional: garante que a prop seja obrigatória
    },
    status: {
      type: Object as PropType<IStatusData>,
      required: true, 
    },
    tableData: {
      type: Array as PropType<ITableData[]>,
      required: true,
    }
  },
  setup(props) {
    const show = ref<boolean>(false)
    return {
      show
    }
  }
})