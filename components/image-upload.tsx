'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
  var cloudinary: any
}

const uploadPreset = "acbammdn";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value
}) => {
  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
  }, [onChange]);

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed  border-2 p-1 border-neutral-300
              flex  justify-center items-center gap-4 text-neutral-600"
          >
            <TbPhotoPlus
              size={24}
            />
            <div className="font-semibold text-md">
              画像をアップロードしてください
            </div>
            {value && (
              <div className="
              absolute inset-0 w-full h-full">
                <Image
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                  alt="product"
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  );
}

export default ImageUpload;
