import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'product',
      title: 'Product',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Product Name',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Product Description',
          type: 'string',
        },
        {
          name: 'price',
          title: 'Product Price',
          type: 'number',
        },
        {
          name: 'image',
          title: 'Product Image',
          type: 'image',
        },
      ],
    },
  ],
}
