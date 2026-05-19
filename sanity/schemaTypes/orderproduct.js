export const orderproduct = {
  name: 'orderproduct',
  type: 'object',
  title: 'Order Product',
  fields: [
    {
      name: 'product',
      type: 'reference',
      title: 'Product',
      to: [{type: 'product'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      productName: 'product.productname',
      quantity: 'quantity'
    },
    prepare(selection) {
      return {
        title: selection.productName,
        subtitle: `Qty: ${selection.quantity}`
      }
    }
  }
}
