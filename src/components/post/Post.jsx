import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=1380&t=st=1691472484~exp=1691473084~hmac=1ab06aea5d2c64dd4e709baf2705a46b727e6d3ce4bec90d413950682f0ead11"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDisc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
        consectetur eaque tenetur hic, necessitatibus itaque sunt repudiandae
        laborum doloremque similique officiis ea illo possimus distinctio.
        Expedita optio rerum ut ad. Dolores, mollitia. Delectus expedita enim
        voluptate autem explicabo, adipisci laborum. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Obcaecati dolores molestias rerum iusto!
        Odio mollitia et deleniti excepturi iusto, sapiente ratione facere totam
        incidunt veniam rerum reprehenderit quo libero reiciendis!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
        consectetur eaque tenetur hic, necessitatibus itaque sunt repudiandae
        laborum doloremque similique officiis ea illo possimus distinctio.
        Expedita optio rerum ut ad. Dolores, mollitia. Delectus expedita enim
        voluptate autem explicabo, adipisci laborum. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Obcaecati dolores molestias rerum iusto!
        Odio mollitia et deleniti excepturi iusto, sapiente ratione facere totam
        incidunt veniam rerum reprehenderit quo libero reiciendis!
      </p>
    </div>
  );
}
