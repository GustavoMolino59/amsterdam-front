import AddBillForm from "./components/forms/AddBillForm/AddBillForm.vue";
import VueApexCharts from "vue3-apexcharts";
import UserCard from "./components/user-card/UserCard.vue";

export default defineComponent({
  name: 'FinancialAdmin',
  components: {
    [AddBillForm.name as string]: AddBillForm,
    VueApexCharts,
    [UserCard.name as string]: UserCard,
  },
  setup() {
    const tab = ref<string | null>(null);
    const series = ref<number[]>([500, 300, 200, 400, 250]);
    const formattedLabels = ["Aluguel", "Eletricidade", "Água", "Internet", "Gás"].map((label, index) => {
      return `${label} - R$ ${series.value[index].toFixed(2)}`;
    });
    const chartOptions = ref({
      chart: {
        type: "donut",
      },
      labels:["Aluguel", "Eletricidade", "Água", "Internet", "Gás"],
      legend: {
        show: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => `R$ ${val.toFixed(2)}`,
        },
      },
    });
    return {
      tab,
      chartOptions,
      series,
      formattedLabels
    }
  }
})