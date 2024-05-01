'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const faqs = [
  {
    question: "My Account",
    subcategories: [
        {
          title: 'How do i acceess my account?', 
          description: 'You can simply sign in to your account on top right of the page and save all your personal and bank details for faster check out.'
        },
        {
          title: 'Online returns',
          description: 'You can initiate a return through our online portal.'
        },
        {
          title: 'Shipping costs',
          description: 'We cover the cost of return shipping within the first 30 days.'
        }
      ],
      subcategories1: [
        {
          title1: 'How do i acceess my account?', 
          description1: 'You can simply sign in to your account on top right of the page and save all your personal and bank details for faster check out.'
        },
        {
          title1: 'Online returns',
          description1: 'You can initiate a return through our online portal.'
        },
        {
          title1: 'Shipping costs',
          description1: 'We cover the cost of return shipping within the first 30 days.'
        }
      ]
  },
  {
    question: "Delivery",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Returns",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Placing an order",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Payments",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  
  // More questions...
]

export default function Help() {
  return (
    <>

    <Navbar />

  <div className="bg-white">
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    {faq.subcategories && (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <div className="mt-4">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                <h3 className="text-base font-semibold">How do i access my account?</h3>
                                <span className="ml-6 flex h-7 items-center">
                                  {open ? (
                                    <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                                  ) : (
                                    <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </div>
                            
                            <Disclosure.Panel as="div" className="mt-2 pl-6">
                              <ul className="ml-4 list-disc space-y-2 text-base leading-7 text-gray-600">
                                {faq.subcategories.map((subcategory, index) => (
                                  <li key={index}>
                                    <div className="flex items-start">
                                      <div className="ml-3">
                                        <p className="text-base leading-7 text-gray-600">{subcategory.title}</p>
                                        <p className="mt-2 text-base leading-7 text-gray-600">
                                          {subcategory.description}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  </div>



    <Footer />
    </>
  )
}
