import React from 'react'
const dummy = 'https://moneyformeaning.com/wp-content/uploads/2019/09/tedx-logo.png'
function EventLayout() {
  return (
    <section className='mx-[2rem] my-[2rem]'>
        <div><h2 className='text-4xl font-semibold uppercase'>Title</h2></div>
        <div className='w-full h-auto my-6 px-[2rem]'>
            <img src={dummy} alt="tedex" />
        </div>
        <div className=''>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quia culpa pariatur commodi voluptate blanditiis molestias, ut, ullam, debitis sequi nobis. Adipisci accusantium quaerat tenetur deleniti ducimus repellendus id nam libero laborum quis, et veritatis nihil explicabo, deserunt ad facilis!
            </p>
        </div>
        <div className='mt-4 fixed right-4 bottom-4'>
            <button className='text-xl bg-red-500 text-white px-4 py-3 rounded-lg'>Navigate to eEbsite</button>
        </div>
    </section>
  )
}

export default EventLayout