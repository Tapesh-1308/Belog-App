import service from "../appwrite/config";
import { Link } from "react-router-dom";
import { convert } from "html-to-text";

function PostCard({ post }) {
  const { $id, title, featuredImage, content } = post;
  return (
    <Link to={`/post/${$id}`}>
      <div className="flex items-center flex-col gap-10 p-4 border-[1px] border-white/40  sm:flex-row bg-[#2A2E30] rounded-md">
        <div className="order-1 sm:order-2 ">
          <img
            src={service.previewFile(featuredImage)}
            alt={title}
            className="max-w-[250px] sm:max-w-[200px] rounded-lg"
          />
        </div>

        <div className=" text-white/90 order-1" style={{ flex: "4" }}>
          <h2 className="font-bold text-2xl mb-4">{title}</h2>
          <p className=" text-white/70 text-lg ">
            {convert(content).substring(0, 150)+"..."}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
