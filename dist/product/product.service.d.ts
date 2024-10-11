import { CategoryService } from 'src/category/category.service';
import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductService {
    private prisma;
    private categoryService;
    constructor(prisma: PrismaService, categoryService: CategoryService);
    getAll(searchTerm?: string): Promise<{
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            avatarPath: string;
            phone: string;
        };
        category: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            image: string | null;
        };
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
    }[]>;
    search(searchTerm: string): Promise<{
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            avatarPath: string;
            phone: string;
        };
        category: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            image: string | null;
        };
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
    }[]>;
    bySlug(slug: string): Promise<{
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            avatarPath: string;
            phone: string;
        };
        category: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            image: string | null;
        };
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
    }>;
    byCategory(categorySlug: string): Promise<{
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            avatarPath: string;
            phone: string;
        };
        category: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            image: string | null;
        };
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
    }[]>;
    create(): Promise<string>;
    update(id: string, dto: ProductDto): Promise<{
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
    }>;
    delete(id: string): Promise<{
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
    }>;
}
