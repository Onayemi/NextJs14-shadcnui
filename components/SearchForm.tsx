"use client";

import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

function generatePriceValue() {
  let price = [];
  for (let i = 1; i <= 6; i++) {
    price.push(i * 100);
  }
  return price;
}

type FormValues = {
  address: string;
  categories: string;
  minPrice: string;
  maxPrice: string;
};

export default function SearchForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      address: "",
    },
  });

  const prices = generatePriceValue();

  function formSubmitHandler(data: FormValues) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formSubmitHandler)}
        className="p-6 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end bg-background rounded"
      >
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Search by Address" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Min. Pricing</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Min Pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {prices.map((price) => (
                        <SelectItem key={price} value={price.toString()}>
                          {price}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="maxPrice"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Max. Pricing</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Max Pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {prices.map((price) => (
                        <SelectItem key={price} value={price.toString()}>
                          {price}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        />

        <Button className="col-start-[1] col-end-[-1]">Search</Button>
      </form>
    </Form>
  );
}
