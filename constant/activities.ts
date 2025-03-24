export interface Activity {
    id: string
    title: string
    description: string
    slug: string
    date: string
    author: string
    images: string[]
}

export const activities: Activity[] = [
    {
        id: "1",
        title: "กิจกรรมให้ความรู้เรื่องวิทยุสื่อสาร โรงเรียนบ้านผารังหมี",
        description: "การจัดกิจกรรมให้ความรู้เรื่องวิทยุสื่อสารและเลี้ยงอาหารกลางวันนักเรียน โรงเรียนบ้านผารังหมี ต.ไทรย้อย อ.เนินมะปราง จ.พิษณุโลก เมื่อวันเสาร์ที่ 3 กุมภาพันธ์ 2567 ที่ผ่านมา",
        slug: "",
        date: "2024-02-03",
        author: "",
        images: ["", ""]
    },
    {
        id: "2",
        title: "สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร ร่วมทำบุญโรงทาน ณ วัดเขารูปช้าง",
        description: "เมื่อวันที่ 24 กุมภาพันธ์ 2567 สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร ร่วมทำบุญโรงทาน ณ วัดเขารูปช้าง ต.ดงป่าคำ อ.เมือง จ.พิจิตร",
        slug: "charity-kitchen-kao-roob-chang",
        date: "2024-02-24",
        author: "",
        images: ["/images/charity-kitchen-kao-roob-chang-8.jpg", "/images/charity-kitchen-kao-roob-chang-2.jpg", "/images/charity-kitchen-kao-roob-chang-3.jpg", "/images/charity-kitchen-kao-roob-chang-4.jpg", "/images/charity-kitchen-kao-roob-chang-5.jpg", "/images/charity-kitchen-kao-roob-chang-6.jpg", "/images/charity-kitchen-kao-roob-chang-7.jpg", "/images/charity-kitchen-kao-roob-chang-1.jpg", "/images/charity-kitchen-kao-roob-chang-9.jpg", "/images/charity-kitchen-kao-roob-chang-10.jpg", "/images/charity-kitchen-kao-roob-chang-11.jpg", "/images/charity-kitchen-kao-roob-chang-12.jpg", "/images/charity-kitchen-kao-roob-chang-13.jpg", "/images/charity-kitchen-kao-roob-chang-14.jpg", "/images/charity-kitchen-kao-roob-chang-15.jpg", "/images/charity-kitchen-kao-roob-chang-16.jpg", "/images/charity-kitchen-kao-roob-chang-17.jpg"]
    },
    {
        id: "3",
        title: "กิจกรรมให้ความรู้เรื่องวิทยุสื่อสาร โรงเรียนวัดเนินสมอ",
        description: "การจัดกิจกรรมให้ความรู้เรื่องวิทยุสื่อสารและเลี้ยงอาหารกลางวันนักเรียน โรงเรียนวัดเนินสมอ อ.เมือง จ.พิจิตร เมื่อวันที่ 13 กรกฏาคม 2567 ที่ผ่านมา",
        slug: "",
        date: "2024-07-13",
        author: "",
        images: ["", ""]
    },
    {
        id: "4",
        title: "ร่วมวางพานพุ่มรัชกาลที่ 10",
        description: "การร่วมกิจกรรมวางพานพุ่มเพื่อน้อมรำลึกในพระมหากรุณาธิคุณรัชกาลที่ 10 ณ ที่ว่าการอำเภอสากเหล็ก จ.พิจิตร เมื่อวันที่ 28 กรกฎาคม 2567 ที่ผ่านมา",
        slug: "",
        date: "2024-07-28",
        author: "",
        images: ["", ""]
    },
    {
        id: "5",
        title: "ศูนย์สายลม HS0AB เยี่ยมชม HS6AJ",
        description: "เมื่อวันที่ 9 สิงหาคม 2567 ศูนย์สายลม HS0AB ได้เดินทางไปเยี่ยมชมสถานีวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ ณ ที่ทำการสมาคม อำเภอสากเหล็ก จังหวัดพิจิตร",
        slug: "HS0AB-visit-HS6AJ",
        date: "2024-08-09",
        author: "",
        images: ["/images/HS0AB_visit_HS6AJ_1.jpg", "/images/HS0AB_visit_HS6AJ_2.jpg", "/images/HS0AB_visit_HS6AJ_3.jpg", "/images/HS0AB_visit_HS6AJ_4.jpg", "/images/HS0AB_visit_HS6AJ_5.jpg", "/images/HS0AB_visit_HS6AJ_6.jpg", "/images/HS0AB_visit_HS6AJ_7.jpg", "/images/HS0AB_visit_HS6AJ_8.jpg", "/images/HS0AB_visit_HS6AJ_9.jpg", "/images/HS0AB_visit_HS6AJ_10.jpg", "/images/HS0AB_visit_HS6AJ_11.jpg", "/images/HS0AB_visit_HS6AJ_12.jpg"]
    },
    {
        id: "6",
        title: "ช่วยเหลือผู้ประสบอุทกภัย จ.สุโขทัย",
        description: "ร่วมช่วยเหลือ บริจาคสิ่งของ เครื่องใช้ ให้แก่ผู้ประสบอุทกภัย จ.สุโขทัย เมื่อวันที่ 28 สิงหาคม 2567 ที่ผ่านมา",
        slug: "",
        date: "2024-08-28",
        author: "",
        images: ["", ""]
    },
    {
        id: "7",
        title: "ซ่อมบำรุงสถานีทวนสัญญาณ E24BD",
        description: "การซ่อมบำรุงสถานีทวนสัญญาณ E24BD ณ ที่ตั้งสถานีวัดเขารูปช้าง ต.ดงป่าคำ อ.เมือง จ.พิจิตร เมื่อวันที่ 15 ตุลาคม 2567 ที่ผ่านมา",
        slug: "",
        date: "2024-10-15",
        author: "",
        images: ["", ""]
    },
    {
        id: "8",
        title: "กิจกรรมให้ความรู้เรื่องวิทยุสื่อสาร โรงเรียนบ้านน้ำตาก",
        description: "การจัดกิจกรรมให้ความรู้เรื่องวิทยุสื่อสารและเลี้ยงอาหารกลางวันนักเรียน โรงเรียนบ้านน้ำตาก อ.นครไทย จ.พิษณุโลก เมื่อวันที่ 18 มกราคม 2568 ที่ผ่านมา",
        slug: "",
        date: "2025-01-18",
        author: "",
        images: ["", ""]
    },
    {
        id: "9",
        title: "เข้าร่วมแข่งขัน Thailand Field Day Contest 2025",
        description: "ปีนี้ HS6AJ มีโอกาสได้เข้าร่วมการแข่งขัน Thailand Field Day Contest ที่เป็นการแข่งขันย่านความถี่ VHF 144-147 MHz ของนักวิทยุสมัครเล่นไทย โดยมีวัตถุประสงค์หลักเพื่อเป็นการเตรียมความพร้อมของนักวิทยุสมัครเล่นในการรองรับเหตุการณ์ฉุกเฉินหรือ ภัยพิบัติให้สามารถแก้ไขปัญหาและดำเนินการติดต่อสื่อสารประสานงานกันได้อย่างมีประสิทธิภาพและรวดเร็วอีกทั้งเป็นการช่วยให้ลดจำนวน การสูญเสียจากเหตุฉุกเฉินหรือภัยพิบัติที่เกิดขึ้นทั้งต่อชีวิต ทรัพย์สิน ชุมชน และประเทศชาติได้ แข่งขันกัน 24 ชั่วโมง เริ่มออกอากาศวันเสาร์ที่ 8 ก.พ. 2568 12.00 น.สิ้นสุดออกอากาศวันอาทิตย์ที่ 9 ก.พ. 2568 12.00 น.",
        slug: "hs6aj-thailand-field-day-contest-2025",
        date: "2024-02-08",
        author: "",
        images: ["/images/hs6aj-tfdc-2025-1.jpg", "/images/hs6aj-tfdc-2025-2.jpg", "/images/hs6aj-tfdc-2025-3.jpg", "/images/hs6aj-tfdc-2025-4.jpg", "/images/hs6aj-tfdc-2025-5.jpg", "/images/hs6aj-tfdc-2025-6.jpg", "/images/hs6aj-tfdc-2025-7.jpg", "/images/hs6aj-tfdc-2025-8.jpg", "/images/hs6aj-tfdc-2025-9.jpg"]
    },
    {
        id: "10",
        title: "ประชุมใหญ่สามัญประจำปี 2567 ครั้งที่ 2",
        description: "สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ นัดหมายสมาชิกประชุมใหญ่สามัญประจำปี 2567 ครั้งที่ 2 ณ ห้องประชุม โรงเรียนอนุบาลสากเหล็ก อ.สากเหล็ก จ.พิจิตร วันเสาร์ที่ 8 มีนาคม 2568 ตั้งแต่เวลา 09.30-12.00 น. เป็นไปด้วยความเรียบร้อย มีผู้เข้าร่วมประชุมจำนวน 24 ท่าน สมาชิกผู้เข้าร่วมประชุมมีมติเป็นเอกฉันท์เลือกนายสุพจน์ พันสด E24XQM เป็นนายกสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
        slug: "hs6aj-annual-meeting-2023-round-2",
        date: "2024-03-08",
        author: "",
        images: ["/images/hs6aj-meeting-2023-20.jpg", "/images/hs6aj-meeting-2023-9.jpg", "/images/hs6aj-meeting-2023-23.jpg", "/images/hs6aj-meeting-2023-24.jpg", "/images/hs6aj-meeting-2023-25.jpg", "/images/hs6aj-meeting-2023-30.jpg", "/images/hs6aj-meeting-2023-5.jpg"]
    },
    {
        id: "11",
        title: 'สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร เข้าร่วมงาน "คืนสู่เหย้า 50ปี น้องพี่เทาทอง"',
        description: "สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร เข้าร่วมงาน “คืนสู่เหย้า 50ปี น้องพี่เทาทอง” โรงเรียนสากเหล็กวิทยา เมื่อวันเสาร์ ที่ 22 มีนาคม 2568 ที่ผ่านมา เนื่องในโอกาสครบรอบ 50 ปี การก่อตั้งโรงเรียนสากเหล็กวิทยา นำโดย คุณระพีพัชร สุดจิตต์ (HS6RZW) นายกสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร พร้อมด้วยสมาชิกสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
        slug: "hs6aj-join-saklekwittaya-school-50th-anniversary-2025",
        date: "2025-03-22",
        author: "",
        images: ["/images/hs6aj-join-saklekwittaya-school-50th-anniversary-2025-1.jpg", "/images/hs6aj-join-saklekwittaya-school-50th-anniversary-2025-2.jpg", "/images/hs6aj-join-saklekwittaya-school-50th-anniversary-2025-3.jpg", "/images/hs6aj-join-saklekwittaya-school-50th-anniversary-2025-4.jpg"]
    }
]