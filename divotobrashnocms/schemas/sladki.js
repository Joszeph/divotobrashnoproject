export default {
    name: 'sladki',
    title: 'Сладкарски изделия',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        description: "Име на продукта",
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        description: "Име на продукта, на латиница",
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  }