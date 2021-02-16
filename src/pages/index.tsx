import React from 'react';
import QuizContainer from '@/components/QuizContainer';
import QuizBackground from '@/components/QuizBackground';
import Footer from '@/components/Footer';
import GitHubCorner from '@/components/GitHubCorner';
import Widget from '@/components/Widget';
import api from '@/api/db';

export default function Home() {
  return (
    <QuizBackground backgroundImage={api.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz mitologia</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum assumenda ratione, sint pariatur aliquid! Provident culpa maxime harum sint. Quibusdam explicabo facilis sequi tenetur commodi libero cum asperiores eligendi? </p>
            </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>teste</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum assumenda ratione, sint pariatur aliquid! Provident culpa maxime harum sint. Quibusdam explicabo facilis sequi tenetur commodi libero cum asperiores eligendi? </p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl={api.github}/>
    </QuizBackground>
  )
}
