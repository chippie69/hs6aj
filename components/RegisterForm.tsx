"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { formRegisterSchema } from "@/schema";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

const RegisterForm = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setPreviewUrl(URL.createObjectURL(files[0]));
      setValue("ARCard", files);
    }
  };

  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
        plan: "lifetime",
        phone: "",
        address: "",
    }
  });

  const onSubmit = (data: z.infer<typeof formRegisterSchema>) => {
    console.log("Form Data:", data);
    alert("ส่งแบบฟอร์มเรียบร้อย");
  };

  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center py-6">
        <div>
          {/* <h2 className="text-5xl font-semibold text-orange mt-4 mb-6">
            กรอกแบบฟอร์ม
          </h2> */}
        </div>
        <div>
          <p className="font-bold text-xl text-gray-600 py-4">กรอกรายละเอียดให้ครบถ้วน</p>
        </div>
      
      <div className="flex flex-col items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>เลือกระยะเวลาที่ต้องการ</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="temporary" />
                        </FormControl>
                        <FormLabel className="font-normal">5 ปี</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="lifetime" />
                        </FormControl>
                        <FormLabel className="font-normal">ตลอดชีพ</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ARCardFile"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>บัตรพนักงานวิทยุสมัครเล่น</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      placeholder="อับโหลดไฟล์บัตรอนุญาตนักวิทยุสมัครเล่น"
                      type="file"
                      accept="image/*, application/pdf"
                      onChange={(event) =>
                        onChange(event.target.files && event.target.files[0])
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="IDCardFile"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>บัตรประชาชน</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      placeholder="อับโหลดไฟล์บัตรประชาชน"
                      type="file"
                      accept="image/*, application/pdf"
                      onChange={(event) =>
                        onChange(event.target.files && event.target.files[0])
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slipFile"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>หลักฐารการชำระ</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      placeholder="อับโหลดไฟล์หลักฐารการชำระ"
                      type="file"
                      accept="image/*, application/pdf"
                      onChange={(event) =>
                        onChange(event.target.files && event.target.files[0])
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>เบอร์โทรศัพท์</FormLabel>
                  <FormControl>
                    <Input placeholder="เบอร์โทรศัพท์ที่ติดต่อได้" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ที่อยู่</FormLabel>
                  <FormControl>
                    <Input placeholder="ที่อยู่ที่ติดต่อได้" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
          </form>
        </Form>
      </div>
      </div>
    </div>
  );
};

export default RegisterForm;
