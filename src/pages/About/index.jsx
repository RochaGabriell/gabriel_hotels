import React from 'react';
import { Grid } from '@mui/material';
import { AboutContainer, Title, SubTitle, ListItem } from './styles';

export default function About() {
  return (
    <AboutContainer>
      <Title variant="h1" align="center">
        Sobre o Hotel Gabriel Rocha
      </Title>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SubTitle variant="h3">Serviços e Comodidades</SubTitle>
          <ul>
            <ListItem>
              Apresentação dos quartos e suítes com fotos e descrições
              detalhadas.
            </ListItem>
            <ListItem>
              Opção de fazer reservas online com diferentes tarifas e pacotes.
            </ListItem>
            <ListItem>
              Informações sobre os serviços do hotel, como restaurante, piscina,
              spa e academia.
            </ListItem>
            <ListItem>Seção com fotos e vídeos do hotel e arredores.</ListItem>
            <ListItem>Blog com dicas de turismo e eventos na região.</ListItem>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubTitle variant="h3">Requisitos não funcionais</SubTitle>
          <ul>
            <ListItem>
              Design elegante e convidativo, que transmita o conforto e a
              sofisticação do hotel.
            </ListItem>
            <ListItem>
              Layout intuitivo e fácil de navegar, facilitando a escolha do
              quarto ideal.
            </ListItem>
            <ListItem>
              Fotos de alta qualidade que mostrem os quartos e as áreas comuns
              do hotel.
            </ListItem>
            <ListItem>Sistema de reservas online seguro e confiável.</ListItem>
            <ListItem>
              Conteúdo informativo e útil para os hóspedes, como dicas de como
              chegar ao hotel e o que fazer na região.
            </ListItem>
          </ul>
        </Grid>
      </Grid>
      <SubTitle variant="h2" align="center">
        Para Disciplina de Tópicos Especiais
      </SubTitle>
    </AboutContainer>
  );
}
