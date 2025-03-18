import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero_image.png"
          alt="hero image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold">สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร</h1>
        <p className="my-8 text-4xl text-gray-300">
          HS6AJ
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="#register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg">
              สมัครสมาชิก
            </Button>
          </Link>

          <Button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 text-lg rounded-lg">
            เพิ่มเพื่อนเลย
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
