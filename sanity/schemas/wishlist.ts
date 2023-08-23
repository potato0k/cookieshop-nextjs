// export const WishlistSchema = {
//   name: 'wishlist',
//   title: 'Wishlist',
//   type: 'document',
//   fields: [
//     {
//       name: 'user',
//       title: 'User',
//       type: 'reference',
//       to: [{ type: 'user' }]
//     },
//     {
//       name: 'products',
//       title: 'Products',
//       type: 'array',
//       of: [
//         {
//           type: 'reference',
//           to: [{ type: 'product' }]
//         }
//       ]
//     }
//   ]
// }

export const WishlistSchema = {
  name: 'wishlist',
  title: 'Wishlist',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'Products',
      type: 'reference',
      to: [{ type: 'product' }]
    }
  ]
}
