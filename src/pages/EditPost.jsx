import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { PostForm, Container } from "../components/index";
import { useSelector } from "react-redux";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const postsData = useSelector(state => state.posts.postsData)

  useEffect(() => {
    const postData = postsData.find(obj => obj.$id === slug);
    if(postData)
      setPost(postData);
    else navigate("/");
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
