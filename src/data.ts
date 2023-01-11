export enum ReportType{
    INCOME = "income",
    EXPENSE = "expense"
}

export const data: Data = {
    report: [
        {
            id: "uudi1",
            source: "Salary",
            amount: 7560,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME,

        },
        {
            id: "uudi2",
            source: "Salary",
            amount: 3500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME,

        },
        {
            id: "uudi1",
            source: "Food",
            amount: 6000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE,

        }
    ]
}

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[]
}

