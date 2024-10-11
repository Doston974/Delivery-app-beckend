import { PrismaService } from 'src/prisma.service';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
