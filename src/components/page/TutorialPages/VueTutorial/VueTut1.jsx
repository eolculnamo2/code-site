/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ForwardAndBack from '../helper-components/ForwardAndBack';
import VueSandbox from './vue-tut-helpers/VueSandbox';
import '../TutorialPage.scss';

const VueTut1 = () => (
  <div className="Global__page-width Tutorial-wrap">
    <ForwardAndBack
      forwardLink="/vue-tutorial-2"
    />
    <h1>Vue Tutorial: Getting Started with the Data function</h1>
    <p>
      Welcome to the Code Life VueJS tutorial!
      This tutorial is designed to make learning VueJS simple and fun.
      We're going to dive right in. Use&nbsp;
      <a href="https://www.codesandbox.com" target="_blank" rel="noopener noreferrer">Code Sandbox</a>
      &nbsp;to get a VueJS template with which we can start.
    </p>
    <h3>
        In this lesson, you'll learn about data.
        Refer to the sandbox below as a reference.
    </h3>
    <VueSandbox />
    <h3>A quick note about this tutorial</h3>
    <p>
      We're going to dive right in so you can begin making things with your own Vue sandbox as soon as possible.
      The goal of this tutorial is start with information you can actually use first and then we'll fill in the gaps as far as background goes later.
    </p>

    <h2>The Data Function</h2>
    <b>NOTE: </b><em>If you need clarification or want to read something in depth, you can read the official docs: </em><a href="https://vuejs.org/v2/guide/components.html">Official Documentation</a>
    <p>The data function is a core feature of Vue. You will interact with it constantly. The data function holds an object for your projects state.</p>
    <p>To help you learn about data, we'll add information to your data hook and display it on screen.</p>

    <h3>Step 1</h3>
    <p>Go to your sandbox and click on the components folder then click HelloWorld.vue</p>
    <p>You'll notice the data function already exists and returns an object with msg.</p>
    <p>Add another variable for the object. In the example above, I've added myMessage and added the string "VueJs is great.</p>

    <h3>Step 2</h3>
    <p>Once added, go to the top of the HelloWorld.vue file and add your variable to the template with the following syntax: { '{{ myMessage }}' }</p>
    <p>This syntax binds your data myMessage to the template. When we update this variable in the next tutorail, you'll find that Vue updates the template with the new value for us. This is called two way data binding.</p>
    <ForwardAndBack
      forwardLink="/vue-tutorial-2"
    />
  </div>
);

export default VueTut1;
