import { Button, Container, PostCard } from "../components/index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const user = useSelector((state) => state.auth.userData);
  const postsData = useSelector((state) => state.posts.postsData);

  const navigate = useNavigate();
  if (postsData.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              {user ? (
                <>
                  <h1 className="text-2xl font-bold text-white hover:text-gray-300 my-4">
                    No Post to display
                  </h1>
                  <Button onClick={() => navigate("/add-post")} >Add Post</Button>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold text-white hover:text-gray-300 my-4">
                    Login to read Post
                  </h1>
                <Button onClick={() => navigate("/login")} >Login</Button>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-col">
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

export default Home;
