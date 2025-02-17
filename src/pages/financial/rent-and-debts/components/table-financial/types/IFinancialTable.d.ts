import type EnumTransactionType from "../enums/EnumTransactionType";

export interface IFinancialTableData {
  date: Date,
  description: string,
  type: EnumTransactionType,
  value: number,
  balance: number
}