export const admin = {
  name: 'admin',
  type: 'document',
  title: 'Admin',
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
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      options: {
        list: [
          { title: 'Super Admin', value: 'super' },
          { title: 'Editor', value: 'editor' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      firstname: 'firstname',
      lastname: 'lastname',
      role: 'role'
    },
    prepare(selection) {
      return {
        title: `${selection.firstname} ${selection.lastname}`,
        subtitle: selection.role
      }
    }
  }
}
