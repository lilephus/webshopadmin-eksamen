export const order = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'orderid',
      type: 'string',
      title: 'Order ID',
      readOnly: true,
      initialValue: () => {
        return Math.random().toString(36).substr(2, 10)
      }
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          {title: 'Open', value: 'open'},
          {title: 'Being Processed', value: 'being-processed'},
          {title: 'Packed', value: 'packed'},
          {title: 'Shipped', value: 'shipped'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'customer',
      type: 'reference',
      title: 'Customer',
      to: [{type: 'customer'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [
        {
          type: 'orderproduct'
        }
      ]
    }
  ],
  preview: {
    select: {
      orderid: 'orderid',
      customerFirstName: 'customer.firstname',
      customerLastName: 'customer.lastname',
      products: 'products'
    },
    prepare(selection) {
      const productCount = selection.products?.length || 0
      return {
        title: selection.orderid,
        subtitle: `${selection.customerLastName}, ${selection.customerFirstName} | ${productCount} item${productCount !== 1 ? 's' : ''}`
      }
    }
  }
}
