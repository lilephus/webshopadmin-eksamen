export const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'productname',
      type: 'string',
      title: 'Product Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'productname',
        maxLength: 200,
        slugify: input => input
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
          .replace(/-+/g, '-')
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'productid',
      type: 'string',
      title: 'Product ID / Number',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock Quantity',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'description',
      type: 'text',
      title: 'Short Description',
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: { hotspot: true }
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    }
  ]
}
