import { useForm } from "react-hook-form";
import service from "../../appwrite/config";
import { useCallback, useEffect } from "react";
import { Button, Input, Select, RTE } from "../index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost } from "../../store/postSlice";
import { useState } from "react";
import Loading from "../Loading";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
  useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(false);

  const submit = async (data) => {
    setLoading(true);
    if (post) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;

      if (file) {
        service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        dispatch(editPost({id: dbPost.$id, post: dbPost}));
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          dispatch(addPost(dbPost));
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
    setLoading(false);
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^\w\d]+/g, "-");
    }
    return "";
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap text-white">
      <div className="w-full sm:w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-full sm:w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={service.previewFile(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {loading ? <Loading /> : (post ? "Update" : "Submit")}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
