import { Response } from "express"

export interface PaginationType {
    page: number,
    limit: number,
    total: number
}

export interface ResponseType {
    message: string,
    pagination?: PaginationType | null, 
    data?: any
}
