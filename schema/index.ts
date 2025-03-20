import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 4; // 4MB
const ACCEPTED_FILE_TYPES = ["image/jpg"];

export const formRegisterSchema = z.object({
  plan: z.enum(["temporary", "lifetime"], {
    required_error: "กรุณาเลือกระยะเวลาที่ต้องการ",
  }),
  ARCardFile: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "ไฟล์ใบอนุญาตต้องมีขนาดไม่เกิน 4MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "ไฟล์ใบอนุญาตต้องเป็นไฟล์รูปภาพเท่านั้น"),

  IDCardFile: z
    .instanceof(File)
    .refine((file) => {
        return !file || file.size <= MAX_UPLOAD_SIZE
    }, "ไฟล์บัตรประชาชนต้องมีขนาดไม่เกิน 4MB")
    .refine((files) => {
        return ACCEPTED_FILE_TYPES.includes(files.type);
    }, "ไฟล์บัตรประชาชนต้องเป็นไฟล์รูปภาพเท่านั้น"),
  slipFile: z
    .instanceof(File)
    .refine((file) => {
        return !file || file.size <= MAX_UPLOAD_SIZE
    }, "ไฟล์หลักฐานโอนเงินต้องมีขนาดไม่เกิน 4MB")
    .refine((file) => {
        return ACCEPTED_FILE_TYPES.includes(file.type)
    }, "ไฟล์หลักฐานโอนเงินต้องเป็นไฟล์รูปภาพเท่านั้น"
    ),
  phone: z.string().regex(/^0\d{9}$/, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง"),
  address: z.string().min(1, "กรุณากรอกที่อยู่"),
  acceptTerms: z
    .boolean()
    .refine((value) => value === true, "กรุณายอมรับข้อตกลง"),
});
