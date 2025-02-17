import type { IFinancialTableData } from "./types/IFinancialTable"

export default defineComponent({
  name: 'FinancialTable',
  props: {
    tableData: {
      type: Array as PropType<IFinancialTableData[]>,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup(props) {
    const search = ref<string>('')
    const headers = [
      { align: 'start', key: 'date', title: 'Data' },
      { align: 'start', key: 'description', title: 'Description' },
      { align: 'start', key: 'type', title: 'Tipo' },
      { align: 'start', key: 'value', title: 'Valor' },
      { align: 'start', key: 'balance', title: 'Saldo' },

    ]
    return {
      headers,
      search
    }
  }
})