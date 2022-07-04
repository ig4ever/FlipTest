export type TypeTransaction = {
  id: string;
  amount: number;
  unique_code: number;
  sender_bank: string;
  account_number: string;
  beneficiary_name: boolean;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
};
