import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: string): Promise<{
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
    toggleFavorite(id: string, productId: string): Promise<{
        message: string;
    }>;
}
