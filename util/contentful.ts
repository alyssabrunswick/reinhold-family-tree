const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchPersons() {
  const entries = await client.getEntries({
    content_type: 'person'
  })
  if (entries.items) return entries.items
  // console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchPerson({ slug }: { slug: string }) {
  const entries = await client.getEntries({
    content_type: 'person',
    'fields.firstName': slug
  })
  if (entries.items) return entries.items
  // console.log(`Error getting Entries for ${contentType.name}.`)
}
