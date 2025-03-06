"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "us",
    label: "United States",
  },
  {
    value: "canada",
    label: "Canada",
  },
  {
    value: "india",
    label: "India",
  },
  {
    value: "gb",
    label: "United Kingdom",
  },
  {
    value: "nz",
    label: "New Zealand",
  },
  {
    value: "au",
    label: "Australia",
  },
]

export function CountrySelect() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("us")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[70px] justify-between"
        >
          {getUnicodeFlagIcon(value)}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Region..." className="h-9" />
          <CommandList>
            <CommandEmpty>  No Region found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  disabled={framework.value !== "us"}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                  }}
                >
                 <span className=" scale-125"> {getUnicodeFlagIcon(framework.value)} </span> 
                 <span> {framework.label} </span>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
