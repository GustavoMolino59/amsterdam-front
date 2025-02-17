import EnumBillsType from "./enums/EnumBiilsTypes"

export default defineComponent({
  name: 'AddBillForm',
  setup(){
    const billsArray = Object.values(EnumBillsType);
    const user = ['Linguini', 'Jão', 'Guri']
    const selectedType = ref<EnumBillsType>()
    const value = ref<number>()
    const date = ref<Date>()
    const selectedsParticipants = ref<string[]>()
    return {
      billsArray,
      selectedType,
      value,
      date,
      selectedsParticipants,
      user
    }
  }
})