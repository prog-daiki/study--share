"use client"

import { User } from "@prisma/client";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../input";
import Modal from "../modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useEditModal from "@/hooks/useEditModal";
import { useRouter } from "next/navigation";
import ImageUpload from "../image-upload";
// import ImageUpload from "../ImageUpload";

interface EditModalProps {
  currentUser: User
}

const EditModal: React.FC<EditModalProps> = ({
  currentUser
}) => {
  const editModal = useEditModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const userBio = useMemo(() => {
    if (typeof currentUser.bio === null) {
      return '';
    } else {
      return currentUser.bio;
    }
  }, [currentUser.bio])

  const userProfileImage = useMemo(() => {
    if (typeof currentUser.profileImage === null) {
      return '/';
    } else {
      return currentUser.profileImage;
    }
  }, [currentUser.profileImage])

  const userCoverImage = useMemo(() => {
    if (typeof currentUser.coverImage === null) {
      return '/';
    } else {
      return currentUser.coverImage;
    }
  }, [currentUser.coverImage])


  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      // profileImage: userProfileImage,
      // coverImage: userCoverImage,
      name: `${currentUser.name}`,
      username: `${currentUser.username}`,
      bio: userBio,
    }
  });


  const [name, setName] = useState(`${currentUser.name}` as string);
  const [username, setUsername] = useState(`${currentUser.username}` as string);
  const [bio, setBio] = useState(`${currentUser.bio}` as string);
  const [profileImage, setProfileImage] = useState(`${currentUser.profileImage}` as string)



  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/edit', data)
      .then(() => {
        router.refresh();
        reset();
        editModal.onClose();
      })
      .catch(() => {
        toast.error('もう一度お試しください');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  // const profileImage = watch('profileImage');
  // const coverImage = watch('coverImage');


  const bodyContent = (
    <div className="flex flex-col gap-4">
      {/* <ImageUpload onChange={(value) => setProfileImage(value)}
        value={profileImage} /> */}
      {/* <ImageUpload onChange={(value) => setCustomValue('coverImage', value)}
        value={coverImage} /> */}
      <Input
        label="名前"
        id="name"
        type="text"
        disabled={isLoading}
        register={register}
        onChange={(e) => setName(e.target.value)}
        errors={errors}
        required
      />
      <Input
        label="ユーザーネーム"
        id="username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        label="自己紹介"
        id="bio"
        onChange={(e) => setBio(e.target.value)}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      title="プロフィールを編集する"
      actionLabel="保存する"
      onClose={editModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}

export default EditModal;
