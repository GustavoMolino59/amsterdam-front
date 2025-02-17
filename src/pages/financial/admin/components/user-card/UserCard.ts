
export default defineComponent({
  name: 'UserCard',
  props: {
    userId: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const show = ref<boolean>(false)
    const tableData= [{title: 'contas', value: '900'}];

    return {
      show,
      tableData
    }
  }
})