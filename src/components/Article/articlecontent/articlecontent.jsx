import Image from "next/image";
import { Icon } from '@iconify/react';
export default function Information({ content, contentId, urlImage }) {
  return (
    <div className="space-y-2">
      <div id={contentId} className="pt-serif mt-7">
        {content}
      </div>
      {urlImage && (
        <Image
          src={urlImage}
          alt="Image Article"
          width={760}
          height={400}
          className="rounded-lg mt-5"
        />
      )}

      {/* SHARE TO MEDSOS */}
      <div>
        <h3 className="font-bold nunito mt-10 text-lg">Share This Article:</h3>
        <div className="flex gap-3 mt-2 mb-16">
        <Icon icon="basil:facebook-solid" width={40} height={40} color="#136AAD" className="bg-[#DDF2FF] rounded-sm dark:rounded-full p-1" />
        <Icon icon="mdi:twitter" width={40} height={40} color="#136AAD" className="bg-[#DDF2FF] rounded-sm dark:rounded-full p-1" />
        <Icon icon="ant-design:instagram-filled" width={40} height={40} color="#136AAD" className="bg-[#DDF2FF] rounded-sm dark:rounded-full p-1" />
        <Icon icon="flowbite:linkedin-solid" width={40} height={40} color="#136AAD" className="bg-[#DDF2FF] rounded-sm dark:rounded-full p-1" />
        </div>
      </div>

    </div>
  );
}
