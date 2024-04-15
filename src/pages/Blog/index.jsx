import React, { useState } from 'react';
import { Grid, Typography, Modal, Button } from '@mui/material';
import {
  BlogContainer,
  PostCard,
  PostContent,
  PostImage,
  ModalContainer,
  Wrapper,
  TypographyText,
} from './styles';
import { posts } from './posts';

export default function Blog() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <BlogContainer>
      <Typography variant="h1" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PostCard onClick={() => handlePostClick(post)}>
              <PostContent>
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.content}
                </Typography>
              </PostContent>
              <PostImage src={post.image} alt={post.title} />
            </PostCard>
          </Grid>
        ))}
      </Grid>
      <Modal open={openModal} onClose={handleCloseModal}>
        <ModalContainer>
          {selectedPost && (
            <Wrapper>
              <Typography variant="h4">{selectedPost.title}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {selectedPost.date}
              </Typography>
              <Typography variant="body1">{selectedPost.content}</Typography>
              <PostImage src={selectedPost.image} alt={selectedPost.title} />
              <TypographyText variant="body1">
                {selectedPost.description}
              </TypographyText>
              <TypographyText variant="body1">
                {selectedPost.description}
              </TypographyText>
              <TypographyText variant="body1">
                {selectedPost.description}
              </TypographyText>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseModal}
              >
                Fechar
              </Button>
            </Wrapper>
          )}
        </ModalContainer>
      </Modal>
    </BlogContainer>
  );
}
