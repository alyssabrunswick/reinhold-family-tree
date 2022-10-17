import { Contentful_Person } from "../types"

export const Person = ({ firstName, lastName }: Contentful_Person) => {
  return (
    <div>
      {`${firstName} ${lastName}`}
    </div>
  )
}