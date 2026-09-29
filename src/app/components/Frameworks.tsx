import React from 'react'
import Software from "./Software";


export interface FrameworksProps {
  img: string;
  text: string;
}

const Frameworks = () => {
  return (
    <div className="flex justify-center text-center flex-wrap">
        <Software img="devicons/React.svg" text="React.js" />
        <Software img="devicons/React.svg" text="React Native" />
        <Software img="devicons/Nextjs.svg" text="Next.js" />
        <Software img="devicons/Express.svg" text="Express.js" />
        <Software img="devicons/jest.svg" text="Jest.js" />
        <Software img="devicons/NodeJS.svg" text="Node.js" />
        <Software img="devicons/GraphQL.svg" text="GraphQL" />
    </div>
  )
}

export default Frameworks