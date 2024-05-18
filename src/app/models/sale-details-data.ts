export interface SaleDetailsData
{
    sales_SaleID: number,
    materials_MaterialID: number,
    providers_ProviderID: number,
    Quantity: number,
    created_at: Date,
    updated_at: Date,
    SaleDetailID: number
}

export interface SaleDetailsDataForList
{
    SaleDetailID: number;
    sales_SaleID: number;
    materials_MaterialID: number;
    MaterialName: string;
    providers_ProviderID: number;
    ProviderName: string;
    Quantity: number;
}
