interface IAnalysisList {    id: number | null;    inpayId: string;    outletName: string;    transDate: string;    supplierCostAmount: string;    installmentAmount: string;    fullNameBuyers: string;    status: string | null;    productName: string | null;    phoneNumber: string | null;}export interface IAnalysis {    content: IAnalysisList[];    totalElement: number | null;    currentPage?: number | null;}