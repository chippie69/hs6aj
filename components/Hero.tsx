import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero_image.png"
          alt="hero image"
          fill
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl leading-12 md:text-6xl md:leading-20 font-bold">สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร</h1>
        <p className="my-8 text-4xl text-gray-300">
          HS6AJ
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link href="#register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg">
              สมัครสมาชิก
            </Button>
          </Link>

          <Link href="https://lin.ee/Fk3FcoM">
          <Button variant="line">
            <Image
              src="/images/LINE_Brand_icon.png"
              alt="line icon"
              width={30}
              height={30}
              className="object-fill"
            />
            <p className="font-bold">เพิ่มเพื่อนเลย</p>
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
