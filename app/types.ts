export type InstitutionProps = {
	name: string;
	code: string;
	type: string;
};

export type VerifyAccountPayload = {
	institution: string;
	accountIdentifier: string;
};

export type FormValues = {
	currency: string;
	institution: string;
	accountName: string;
	accountIdentifier: string;
};

export type TransactionStatus = "pending" | "settled" | "refunded";

export type TransactionHistoryResponse = {
	id: string;
	amount: number;
	token: string;
	transactionFee: number;
	rate: number;
	network: string;
	recipient: {
		currency: string;
		institution: string;
		accountIdentifier: string;
		accountName: string;
	};
	fromAddress: `0x${string}`;
	returnAddress: `0x${string}`;
	gatewayID: string;
	createdAt: Date;
	updatedAt: Date;
	status: TransactionStatus;
	txHash: string;
};

export type TransactionHistoryParams = {
	page?: number;
	pageSize?: number;
};

export type RatePayload = {
	token: string;
	amount?: number;
	currency: string;
};

export type RateResponse = {
	status: string;
	data: number;
	message: string;
};

export type LinkAddressRequest = {
	institution: string;
	accountIdentifier: string;
	accountName: string;
};

export type LinkAddressResponse = {
	linkedAddress: string;
	institution: string;
	accountIdentifier: string;
	accountName: string;
	updatedAt: Date;
	createdAt: Date;
};

export type LinkedAddressResponse = {
	linkedAddress: string;
	currency: string;
	institution: string;
	accountIdentifier: string;
	accountName: string;
	resolvedAddress: string;
	error: string;
};

export type TransactionsListResponse = {
	total: number;
	page: number;
	pageSize: number;
	transactions: TransactionHistoryResponse[];
};
