import React from 'react'
import Feed from '@/components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden'/>
        <h1 className='orange_gradient text-center'>
          AI-Powered Prompts
        </h1>
      </h1>
      <p className='desc text-center'>Promptmenia is an open source AI prompting tool for modern world to discover, create and share creative prompt</p>
    <Feed/>
    </section>
  )
}

export default Home