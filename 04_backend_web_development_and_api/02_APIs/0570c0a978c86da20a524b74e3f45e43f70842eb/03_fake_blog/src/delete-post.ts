import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(idToDelete: number): void {
  request(
    `http://${process.env.HOST}/posts/` + idToDelete,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

export { deletePost };
