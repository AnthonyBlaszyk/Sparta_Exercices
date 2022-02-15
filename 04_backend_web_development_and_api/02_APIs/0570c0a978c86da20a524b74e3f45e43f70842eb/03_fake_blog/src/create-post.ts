import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(title: string, author: string): void {
  const body = { title: title, author: author };
  request(
    `http://${process.env.HOST}/posts`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log({ body });
    },
  );
}

createPost("newPostTitle", "newPostAut");

export { createPost };
