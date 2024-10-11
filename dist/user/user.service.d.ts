import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string, selectObject?: Prisma.UserSelect): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        avatarPath: string;
        phone: string;
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            reference: string;
        }[];
        favorites: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            description: string;
            price: number;
            image: string;
            categoryId: string | null;
            userId: string | null;
        }[];
        _count: {
            orders: number;
            favorites: number;
        };
    }>;
    toggleFavorite(userId: string, productId: string): Promise<{
        message: string;
    }>;
}
