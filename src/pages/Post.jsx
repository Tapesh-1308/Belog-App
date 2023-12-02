import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { deletePost as deletePostData } from "../store/postSlice";
import Loading from "../components/Loading";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();

  const postsData = useSelector((state) => state.posts.postsData);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (slug) {
      window.scrollTo(0, 0);
      const postData = postsData.find((obj) => obj.$id === slug);
      if (postData) setPost(postData);
      else navigate("/");
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    setLoading(true);
    const id = post.$id;
    service
      .deletePost(post.$id)
      .then((status) => {
        if (status) {
          service.deleteFile(post.featuredImage);
          dispatch(deletePostData(id));
          navigate("/");
        }
      })
      .finally(() => setLoading(false));
  };

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative rounded-xl p-2">
          <img
            src={service.previewFile(post.featuredImage)}
            alt={post.title}
            className="w-screen max-w-[250px] sm:max-w-[350px] rounded-xl border-2 border-white/20"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-[#1B9E4B]" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-[#9F0E0E]" onClick={deletePost}>
                {loading ? <Loading /> : "Delete"}
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6 text-white">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="text-white browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}
