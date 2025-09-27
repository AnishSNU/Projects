import React from "react";
import CustomNavbar from "./Navbar"; // Make sure filename is Navbar.js
import Content from "./Content";
import { Container } from "react-bootstrap";

function Layout() {
  const posts = [
    { title: "Post 1", description: "This is the first post description." },
    { title: "Post 2", description: "This is the second post description." },
    { title: "Post 3", description: "This is the third post description." },
    { title: "Post 4", description: "This is the fourth post description." },
  ];

  return (
    <>
      <CustomNavbar />
      <Container className="mt-4">
        <Content posts={posts} />
      </Container>
    </>
  );
}

export default Layout;
