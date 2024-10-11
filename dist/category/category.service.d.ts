import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            products: number;
        };
        slug: string;
        image: string;
        products: {
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
    }[]>;
    getById(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            products: number;
        };
        slug: string;
        image: string;
        products: {
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
    }>;
    getBySlug(slug: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            products: number;
        };
        slug: string;
        image: string;
        products: {
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
    }>;
    create(): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
    }>;
    update(id: string, dto: CategoryDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
    }>;
    delete(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
    }>;
}
