export const products = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "Description",
      title: "Product Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "product image",
      type: "array",
      of:[
        {
            type:"image",
            fields:[
                {
                    name : "alt",
                    type: 'text',
                    title:'alternative text'
                }
            ]
        }
      ]
    },
    {
        name:'productType',
        type:'array',
        title:'ProductType',
        of:[{type:'string'}]
    },
    {
        name:'productSize',
        type:'array',
        title:'Sizes',
        of:[{type:'string'}]
    },
    {
      name: "Price",
      title: "Product Price",
      type: "string",
    },
  ],
};
