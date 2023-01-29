export type Contentful_Person = {
  id: string,
  birthDate: string,
  // birthLocation:
  deathDate: string,
  firstName: string
  // images
  lastName: string
  images: Contentful_Image[]
}

type Contentful_Image = {
  fields: {
    title: string
    file: {
      contentType: string
      fileName: string
      url: string
      details: {
        size: number
        image: {
          width: number
          height: number
        }
      }
    }
  }
}