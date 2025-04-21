import React from 'react'

const PageTitle = (pageTitle: string) => {
  return (
    <h1 className="text-center bg-[#333] pt-5 pb-5 m-0 w-full mb-[15px] text-[1.3rem]">
          {pageTitle}
        </h1>
  )
}

export default PageTitle