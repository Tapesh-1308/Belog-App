import { Container, PostCard } from "../components/index";
import { useSelector } from "react-redux";

function MyPosts() {

  const user = useSelector((state) => state.auth.userData);
  const postsData = useSelector((state) => state.posts.postsData);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-col flex-wrap">
          {postsData.map(
            (post) =>
              post.userId === user.$id && (
                <div key={post.$id} className="p-2">
                  <PostCard post={post} />
                </div>
              )
          )}
        </div>
      </Container>
    </div>
  );
}

export default MyPosts;
