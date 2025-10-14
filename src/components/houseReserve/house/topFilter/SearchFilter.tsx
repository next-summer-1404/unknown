'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SearchFilter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [term, setTerm] = useState(searchParams.get('query') || '')

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="flex flex-col rounded-lg py-2 w-5/12">
      <p className="text-sm text-[#FFFFFF] mb-1">جستجو:</p>

      <div className="flex items-center justify-center gap-1 p-2 rounded-lg border border-[#AAAAAA]">
        <MagnifyingGlassIcon className="w-5 h-5 text-white mr-1" />

        <input
          type="text"
          placeholder="نام هتل موردنظر..."
          className="bg-transparent text-white outline-none w-full placeholder:text-white text-sm"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value)
            handleSearch(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default SearchFilter
