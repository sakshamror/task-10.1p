import React from 'react';
import './App.css';
import CardItem from './CardItem'
import Navbar from './NavBar';
import authors from './authors';
import './card.css';
import { Card } from 'semantic-ui-react';
import Newsletter from './Newsletter';
import Socials from './Socials';
import About from './footer'


function App() {
  return ( 
  <div>

    <Navbar />
    <Socials />
    {/* <Wallpaper /> */}

<center>

<h3>Featured Article</h3>
</center>
<b className="row">
  <CardItem
  Image = {authors[3].Image}
  Name = {authors[3].Name}
  Date =  {authors[3].Date}
  Description = {authors[3].Description}
  Friends = {authors[3].Friends} />

  <CardItem
  Image = {authors[4].Image}
  Name = {authors[4].Name}
  Date =  {authors[4].Date}
  Description = {authors[4].Description}
  Friends = {authors[4].Friends} />

  <CardItem
    Image = {authors[5].Image}
    Name = {authors[5].Name}
    Date =  {authors[5].Date}
    Description = {authors[5].Description}
    Friends = {authors[5].Friends} />
</b>


<center>

<h3>Featured Tutorial</h3>
</center>
<b className="row">
  <CardItem
  Image = {authors[3].Image}
  Name = {authors[3].Name}
  Date =  {authors[3].Date}
  Description = {authors[3].Description}
  Friends = {authors[3].Friends} />

  <CardItem
  Image = {authors[4].Image}
  Name = {authors[4].Name}
  Date =  {authors[4].Date}
  Description = {authors[4].Description}
  Friends = {authors[4].Friends} />

  <CardItem
    Image = {authors[5].Image}
    Name = {authors[5].Name}
    Date =  {authors[5].Date}
    Description = {authors[5].Description}
    Friends = {authors[5].Friends} />
</b>

<c className="centre">
<Newsletter />
</c>
<About/>


  </div>

  );
}

export default App