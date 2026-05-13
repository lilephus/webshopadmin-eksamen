export const customer = {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    {
      name: 'firstname',
      type: 'string',
      title: 'First Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'lastname',
      type: 'string',
      title: 'Last Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'firstname',
        maxLength: 96,
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
      name: 'streetaddress',
      type: 'string',
      title: 'Street Address',
      validation: Rule => Rule.required()
    },
    {
      name: 'zipcode',
      type: 'string',
      title: 'Zip Code',
      validation: Rule => Rule.required()
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required().email()
    }
  ],
  preview: {
    select: {
      firstname: 'firstname',
      lastname: 'lastname'
    },
    prepare(selection) {
      return {
        title: `${selection.lastname}, ${selection.firstname}`
      }
    }
  }
}
