import Link from "next/link"
import { Contentful_Person } from "../../types"

export const Person = ({ firstName, lastName }: Contentful_Person) => {
  return (
    <Link href={`/person/${firstName.toLowerCase()}`}>
      {`${firstName} ${lastName}`}
    </Link>
  )
}