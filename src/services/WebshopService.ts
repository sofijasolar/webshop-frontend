// WebShop Service - API calls
// have functions by themselves or wrapped in a .. class or similar (i think better by themselves?)

// see is it a good practice to have something like a HTTP client, with generic functions and error handling?
// TODO: implement proper error handling
import { createAxiosClient, handleGetError, performGetRequest } from './axiosClient';
import { IProduct } from '../interfaces/IProduct';
import { ICategory } from '../interfaces/ICategory';

const webshopClient = createAxiosClient('https://api.escuelajs.co/api/v1');

// Get requests to the Webshop Client

export const getAllProducts = async (): Promise<IProduct[]> => {
    try {
      return await performGetRequest<IProduct[]>(webshopClient, {
        url: '/products',
      });
    } catch (error) {
        handleGetError(error, 'GetAllProducts');
    //   console.error('Failed to fetch products:', error);
      throw new Error('Unable to load products.');
    }
};

export const getProductById = async (id: number): Promise<IProduct> => {
    try {
        return await performGetRequest<IProduct>(webshopClient, {
        url: `/products/${id}`,
        });
    } catch (error) {
        console.error(`Failed to fetch product with ID ${id}:`, error);
        throw new Error('Unable to load product details.');
    }
};

export const getAllCategories = async (): Promise<ICategory[]> => {
    try {
        return await performGetRequest<ICategory[]>(webshopClient, {
        url: '/categories',
        });
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        throw new Error('Unable to load categories.');
    }
};

export const getProductsByCategory = async (category: ICategory): Promise<IProduct[]> => {
    try {
        return await performGetRequest<IProduct[]>(webshopClient, {
        url: `/products/?categoryId=${category.id}`,
        });
    } catch (error) {
        console.error(`Failed to fetch products in category ${category.name}:`, error);
        throw new Error('Unable to load products.');
    }
}
