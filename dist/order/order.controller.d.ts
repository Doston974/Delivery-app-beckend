import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        reference: string;
    }[]>;
    createOrder(userId: string): Promise<{
        newOrder: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            reference: string;
        };
        status: string;
    }>;
}
