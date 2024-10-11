import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
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
    getProductBySlug(slug: string): Promise<{
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
    getProductsByCategory(categorySlug: string): Promise<{
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
    createProduct(): Promise<string>;
    updateProduct(id: string, dto: ProductDto): Promise<{
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
    deleteProduct(id: string): Promise<{
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
