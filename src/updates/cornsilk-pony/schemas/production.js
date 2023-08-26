export default {
  name: 'update',
  type: 'document',
  title: 'Update',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'organiser',
      type: 'string',
      title: 'Organiser',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Venue',
    },
    {
      name: 'dateTime',
      type: 'string',
      title: 'Date and Time',
    },
    {
      name: 'topic',
      type: 'string',
      title: 'Topic',
    },
    {
      name: 'speaker',
      type: 'string',
      title: 'Speaker',
    },
  ],
}
