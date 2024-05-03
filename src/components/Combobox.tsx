"use client";
import React, { forwardRef, useState } from "react";

// Importing components
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Importing icons
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

// Declaring types
interface ComboboxProps {
    labelText: string;
}

const options = [
    { value: "Business Owner", label: "Business Owner" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Healthcare Professional", label: "Healthcare Professional" },
    { value: "Lawyer", label: "Lawyer" },
    { value: "Unemployed", label: "Unemployed" },
    { value: "Others", label: "Others" },
];

const Combobox: React.FC<ComboboxProps> = ({ labelText }) => {
    // Declare states
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-col items-start">
            <Label className="text-lg" htmlFor={labelText}>
                {labelText}:
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-[200px] justify-between text-black button-hover:bg-gray-500" variant="outline" role="combobox" aria-expanded={open}>
                        {value ? options.find((opt) => opt.value === value)?.label : "Select an occupation..."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput className="h-9" placeholder="Search options..." />
                        <CommandEmpty>No results found</CommandEmpty>
                        <CommandGroup>
                            <CommandList>
                                {options.map((opt) => (
                                    <CommandItem
                                        key={opt.value}
                                        value={opt.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue);
                                            setOpen(false);
                                        }}
                                        disabled={false}
                                    >
                                        {opt.label}
                                        <CheckIcon className={cn("ml-auto h-4 w-4", value === opt.value ? "opacity-100" : "opacity-0")} />
                                    </CommandItem>
                                ))}
                            </CommandList>
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default Combobox;
