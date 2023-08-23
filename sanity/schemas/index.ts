import { AccountSchema } from './account'
import { CategorySchema } from './category'
import { FeaturedProductAndCategoriesSchema } from './featuredItems'
import { GalleryImageSchema } from './galleryImage'
import { ProductSchema } from './product'
import { UserSchema } from './user'
import { VerificationTokenSchema } from './verification-token'
import { WishlistSchema } from './wishlist'

export const schemaTypes = [
  CategorySchema,
  ProductSchema,
  GalleryImageSchema,
  FeaturedProductAndCategoriesSchema,
  UserSchema,
  AccountSchema,
  VerificationTokenSchema,
  WishlistSchema
]
