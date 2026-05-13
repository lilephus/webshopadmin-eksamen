export const category = {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'categoryname',
      type: 'string',
      title: 'Category Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'categoryname',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
          .replace(/-+/g, '-')
      },
      validation: Rule => Rule.required()
    }
  ]
}
