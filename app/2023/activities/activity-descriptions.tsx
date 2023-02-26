import { ReactNode } from "react"

export type Activity = {
  name?: string
  location?: string
  time?: string
  description?: string | ReactNode
  website?: string
  facebookEvent?: string
  isMain?: boolean
}

export const saturday = [
  {
    name: "History Tour",
    time: '1pm',
    location: '',
    description: 'Experience Reinhold history as you see Franz and Emma Reinhold homestead site and tour local cemeteries to hear about our ancestors.',
  },
  {
    name: "Kayaking",
    time: 'TBD',
    location: '',
    description: 'Depending on the weather and river height, there are a few options for us to kayak in Norfolk or the surrounding area!',
  }
]

export const saturdayEvening = 
  {
    name: "Family Dinner",
    time: '5pm',
    location: 'Bianca & Tyson\'s home - 312 S 12th St, Norfolk NE',
    description: `We'll be having an informal dinner Saturday evening for anyone interested. Food will be catered. Please join us for some fun and conversation!`,
  }

export const sunday = 
  {
    name: "85th Annual Reinhold Reunion",
    time: '12pm',
    location: 'Ta-Ha Zouka Park - Clubhouse',
    description: <>
      <p>{`Like the 84 years before this, please join us for the reunion! This year, however, instead of our usual fried chicken, we will be grilling! All we ask is that you bring a side dish or dessert to share.`}</p>
      <p>{`We have a couple of games planned and plenty of time for conversation.`}</p>
      {/* <p>`For the master and amateur anglers, don't forget to bring your fishing poles!`}</p> */}
    </>,
  }

