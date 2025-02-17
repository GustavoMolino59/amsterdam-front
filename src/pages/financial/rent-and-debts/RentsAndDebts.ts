import BillCard from "./components/bill-card/BillCard.vue";
import FinancialCard from "./components/financial-card/FinancialCard.vue";
import EnumTransactionType from "./components/table-financial/enums/EnumTransactionType";
import FinancialTable from "./components/table-financial/FinancialTable.vue";
import type { IFinancialTableData } from "./components/table-financial/types/IFinancialTable";

export default defineComponent({
  name: 'RentsAndDebts',
  components: {
    [FinancialCard.name as string]: FinancialCard,
    [BillCard.name as string]: BillCard,
    [FinancialTable.name as string]: FinancialTable,
  },
  setup() {
    const value = ref<number>(900)
    const object = {text: 'Pago', status: 'error'}
    const accounts = ref([
      { name: 'Água', value: 2024.2, status: 'pago', percentage: 17.2, diff: 200 },
      { name: 'Luz', value: 799.9, status: 'pago', percentage: 6.8, diff: -200 },
      { name: 'Internet', value: 153.04, status: 'pago', percentage: 1.3, diff: 200},
      { name: 'Cartão rep', value: 707.87, status: 'pago', percentage: 6.0, diff: 200 },
      { name: 'Dona Mônica', value: 800, status: 'pago', percentage: 6.8, diff: 200 },
      { name: 'Aluguel', value: 8189.31, status: 'pago', percentage: 69.4, diff: 200 },
    ]);
    const total = ref<number>(9000)
    const diffTotal = ref<number>(400)
    const valuePerUser = ref<number>(900)


    const financialTableMock: IFinancialTableData[] = [
      { date: new Date('2024-02-01'), description: "Salário", type: EnumTransactionType.RECEIPT, value: 5000, balance: 5000 },
      { date: new Date('2024-02-05'), description: "Aluguel", type: EnumTransactionType.PAYMENT, value: -1500, balance: 3500 },
      { date: new Date('2024-02-10'), description: "Freelance", type: EnumTransactionType.RECEIPT, value: 1200, balance: 4700 },
      { date: new Date('2024-02-15'), description: "Supermercado", type: EnumTransactionType.PAYMENT, value: -300, balance: 4400 },
      { date: new Date('2024-02-01'), description: "Salário", type: EnumTransactionType.RECEIPT, value: 5000, balance: 5000 },
      { date: new Date('2024-02-05'), description: "Aluguel", type: EnumTransactionType.PAYMENT, value: -1500, balance: 3500 },
      { date: new Date('2024-02-10'), description: "Freelance", type: EnumTransactionType.RECEIPT, value: 1200, balance: 4700 },
      { date: new Date('2024-02-15'), description: "Supermercado", type: EnumTransactionType.PAYMENT, value: -300, balance: 4400 },
      { date: new Date('2024-02-01'), description: "Salário", type: EnumTransactionType.RECEIPT, value: 5000, balance: 5000 },
      { date: new Date('2024-02-05'), description: "Aluguel", type: EnumTransactionType.PAYMENT, value: -1500, balance: 3500 },
      { date: new Date('2024-02-10'), description: "Freelance", type: EnumTransactionType.RECEIPT, value: 1200, balance: 4700 },
      { date: new Date('2024-02-15'), description: "Supermercado", type: EnumTransactionType.PAYMENT, value: -300, balance: 4400 },
      { date: new Date('2024-02-01'), description: "Salário", type: EnumTransactionType.RECEIPT, value: 5000, balance: 5000 },
      { date: new Date('2024-02-05'), description: "Aluguel", type: EnumTransactionType.PAYMENT, value: -1500, balance: 3500 },
      { date: new Date('2024-02-10'), description: "Freelance", type: EnumTransactionType.RECEIPT, value: 1200, balance: 4700 },
      { date: new Date('2024-02-15'), description: "Supermercado", type: EnumTransactionType.PAYMENT, value: -300, balance: 4400 },
      { date: new Date('2024-02-01'), description: "Salário", type: EnumTransactionType.RECEIPT, value: 5000, balance: 5000 },
      { date: new Date('2024-02-05'), description: "Aluguel", type: EnumTransactionType.PAYMENT, value: -1500, balance: 3500 },
      { date: new Date('2024-02-10'), description: "Freelance", type: EnumTransactionType.RECEIPT, value: 1200, balance: 4700 },
      { date: new Date('2024-02-15'), description: "Supermercado", type: EnumTransactionType.PAYMENT, value: -300, balance: 4400 },
      { date: new Date('2024-02-01'), description: "Salário", type: EnumTransactionType.RECEIPT, value: 5000, balance: 5000 },
      { date: new Date('2024-02-05'), description: "Aluguel", type: EnumTransactionType.PAYMENT, value: -1500, balance: 3500 },
      { date: new Date('2024-02-10'), description: "Freelance", type: EnumTransactionType.RECEIPT, value: 1200, balance: 4700 },
      { date: new Date('2024-02-15'), description: "Supermercado", type: EnumTransactionType.PAYMENT, value: -300, balance: 4400 }
    ];
    return {
      value,
      object,
      accounts,
      total,
      diffTotal,
      valuePerUser,
      financialTableMock
    }
  }
})