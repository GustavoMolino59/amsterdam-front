
import VueApexCharts from "vue3-apexcharts";
export default defineComponent({
  name: 'BillCard',
  components: {
    VueApexCharts
  },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    diff: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const series = ref([props.percentage, 100-props.percentage]);
    
    const chartOptions = ref({
      chart: {
        type: "donut",
      },
      labels: [props.name],
      colors: ["#5388D8", "#FFFFFF"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false, // Desativa as data labels padrão
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true, // Exibe os rótulos no centro do gráfico
              total: {
                showAlways: true, // Garante que o total esteja sempre visível
                show: true, // Exibe o total
                label: "", // Remove o rótulo adicional (nome)
                formatter: () => `${props.percentage}%`, // Formato para exibir a porcentagem
              },
              value: {
                show: true,
                fontSize: '16px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                color: "#5388D8",
                offsetY: -4,
                formatter: function (val) {
                  return 'val'
                }

              }
            },
          },
        },
      },
    });
    return {
      series,
      chartOptions
    };
  }
})