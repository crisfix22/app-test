export interface Operation {
    id: string;
    amount: number;
    carbonScore: number;
    createdAt: Date;
}

export interface HomeResponse {
    success: boolean;
    data: Array<Operation>;
    message: string;
}

export interface HomeRequest {
    simulateNoData: boolean;
}