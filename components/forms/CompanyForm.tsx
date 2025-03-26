"use client";
import { companySchema } from "@/lib/zodSchema";
import React from "react";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Select, SelectContent } from "../ui/select";
import {
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  //   SelectValue,
} from "@radix-ui/react-select";
import { countryList } from "@/lib/countryList";
import { IoChevronDown } from "react-icons/io5";

const CompanyForm = () => {
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      about: "",
      logo: "",
      location: "",
      website: "",
      xAccount: "",
    },
  });

  function onSubmit(values: z.infer<typeof companySchema>) {
    console.log("Form submitted:", values);
    // Handle form submission (e.g., API call)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Tech Corp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-[#878685] text-sm border rounded-md py-1 text-muted-foreground">
                      <SelectValue
                        className="text-[#878685]"
                        placeholder="Select Location"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#1b1917]">
                    <SelectGroup>
                      <SelectLabel>Worldwide</SelectLabel>
                      <SelectItem value="worldwide">
                        <span>🌍</span>
                        <span className="pl-2">Worldwide / Remote</span>
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Location</SelectLabel>
                      {countryList.map((country) => (
                        <SelectItem value={country.name} key={country.code}>
                          <span>{country.flagEmoji}</span>
                          <span className="pl-2">{country.name}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="flex items-center justify-between text-sm border rounded-md py-2 px-3 text-muted-foreground">
                      <div className="flex items-center">
                        {field.value ? (
                          countryList.find((c) => c.name === field.value) ? (
                            <>
                              <span className="mr-2">
                                {
                                  countryList.find(
                                    (c) => c.name === field.value
                                  )?.flagEmoji
                                }
                              </span>
                              <span>
                                {
                                  countryList.find(
                                    (c) => c.name === field.value
                                  )?.name
                                }
                              </span>
                            </>
                          ) : field.value === "worldwide" ? (
                            <>
                              <span className="mr-2">🌍</span>
                              <span>Worldwide / Remote</span>
                            </>
                          ) : (
                            <span>Select Location</span>
                          )
                        ) : (
                          <span>Select Location</span>
                        )}
                      </div>
                      <IoChevronDown className="h-4 w-4 opacity-50 ml-2" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background">
                    <SelectGroup>
                      <SelectLabel className="px-2 py-1 text-xs text-muted-foreground">
                        Worldwide
                      </SelectLabel>
                      <SelectItem
                        value="worldwide"
                        className="flex items-center px-2 py-1.5 hover:bg-accent cursor-pointer"
                      >
                        <span>🌍</span>
                        <span className="pl-2">Worldwide / Remote</span>
                      </SelectItem>
                    </SelectGroup>
                    <div className="border-t my-1" />
                    <SelectGroup>
                      <SelectLabel className="px-2 py-1 text-xs text-muted-foreground">
                        Countries
                      </SelectLabel>
                      {countryList.map((country) => (
                        <SelectItem
                          value={country.name}
                          key={country.code}
                          className="flex items-center px-2 py-1.5 hover:bg-accent cursor-pointer"
                        >
                          <span>{country.flagEmoji}</span>
                          <span className="pl-2">{country.name}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => {
              // Get the current value from the form
              const value = field.value;
              // Find the selected country or worldwide option
              const selectedOption =
                value === "worldwide"
                  ? { emoji: "🌍", name: "Worldwide / Remote" }
                  : countryList.find((c) => c.name === value);

              return (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={value} // Controlled value
                  >
                    <FormControl>
                      <SelectTrigger className="flex items-center justify-between text-sm border rounded-md py-2 px-3 text-muted-foreground">
                        <div className="flex items-center">
                          {selectedOption ? (
                            <>
                              <span className="mr-2">
                                {selectedOption.emoji ||
                                  selectedOption.flagEmoji}
                              </span>
                              <span>{selectedOption.name}</span>
                            </>
                          ) : (
                            <span>Select Location</span>
                          )}
                        </div>
                        <IoChevronDown className="h-4 w-4 opacity-50 ml-2" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background max-h-[300px] overflow-y-auto">
                      <SelectGroup>
                        <SelectLabel className="px-2 py-1 text-xs text-muted-foreground">
                          Worldwide
                        </SelectLabel>
                        <SelectItem
                          value="worldwide"
                          className="flex items-center px-2 py-1.5 hover:bg-accent cursor-pointer"
                        >
                          <span>🌍</span>
                          <span className="pl-2">Worldwide / Remote</span>
                        </SelectItem>
                      </SelectGroup>
                      <div className="border-t my-1" />
                      <SelectGroup>
                        <SelectLabel className="px-2 py-1 text-xs text-muted-foreground">
                          Countries
                        </SelectLabel>
                        {countryList.map((country) => (
                          <SelectItem
                            value={country.name}
                            key={country.code}
                            className="flex items-center px-2 py-1.5 hover:bg-accent cursor-pointer"
                          >
                            <span>{country.flagEmoji}</span>
                            <span className="pl-2">{country.name}</span>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourcompany.com" {...field} />
                </FormControl>
                {/* <FormDescription>
                  Optional. Must be a valid URL.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="xAccount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>X (Twitter) Handle</FormLabel>
                <FormControl>
                  <Input placeholder="@yourhandle" {...field} />
                </FormControl>
                {/* <FormDescription>Optional. Must start with "@".</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* About */}
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea
                  rows={8}
                  cols={8}
                  placeholder="We are a leading tech company..."
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                Describe your company in at least 10 characters.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Logo (URL) */}
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/logo.png" {...field} />
              </FormControl>
              {/* <FormDescription>Optional. Must be a valid URL.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default CompanyForm;
