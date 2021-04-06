import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const data = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content: "HyperText Markup Language(HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet.The markup tells web browsers how to display a web page's words and images."
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable'
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'JavaScript is a text- based programming language used both on the client - side and server - side that allows you to make web pages interactive.Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user'
  }
];

ReactDOM.render(
  <Accordion data={data} />,
  document.getElementById('root')
);
