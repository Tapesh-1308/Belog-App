import { Container, PostCard } from "../components/index";
import { useSelector } from "react-redux";

function AllPosts() {
  const postsData = useSelector((state) => state.posts.postsData);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-col flex-wrap">
          {postsData.map((post) => (
            <div key={post.$id} className="p-2">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
