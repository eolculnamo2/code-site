/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ForwardAndBack from '../helper-components/ForwardAndBack';
import VueSandbox from './vue-tut-helpers/VueSandbox';
import '../TutorialPage.scss';

const VueTut2 = () => (
  <div className="Global__page-width Tutorial-wrap">
    <ForwardAndBack
      backwardLink="/vue-tutorial-1"
      forwardLink="/vue-tutorial-2"
    />
    <h1>Vue Tutorial: Methods</h1>
    <p>
      In the last step, we talked about the data function. Another central part of VueJS is the <b>methods</b> object.
      If you haven't aleady, go ahead and use&nbsp;
      <a href="https://www.codesandbox.com" target="_blank" rel="noopener noreferrer">Code Sandbox</a>
      &nbsp;to get a VueJS template with which we can practice.
    </p>
    <h3>
        In this lesson, you'll learn about methods.
        Refer to the sandbox below as a reference.
    </h3>
    <VueSandbox />

    <h2>The Methods Object</h2>
    <b>NOTE: </b><em>If you need clarification or want to read something in depth, you can read the official docs: </em><a href="https://vuejs.org/v2/guide/instance.html#Data-and-Methods">Official Documentation</a>
    <p>The methods object has one job: It holds your component's functions.</p>

    <h3>Step 1</h3>
    <p>Look in the HelloWorld component that we worked in before in the SandBox example provided above.</p>
    <p>You'll notice I added a function called changeMsg which is used to change the msg variable.</p>
    <p>Go ahead and create your own function in the methods object to change variable from the data function.</p>
    <p>Notice that we use 'this' to access other values from the same component. So when I change msg, I can say this.msg = 'new Value'</p>

    <h3>Step 2</h3>
    <p>Once you add your function, you'll want to call it. Add a button to your template and @click as an attribute like in the example above.</p>
    <p>@click tells Vue to listen for a particular function from the component's methods object. So we can say @click="myFunction()" to call a function called myFunction</p>
    <p>You'll know it worked when you see the value of your variable from the data function update on the screen from the last step.</p>
    <ForwardAndBack
      backwardLink="/vue-tutorial-1"
      forwardLink="/vue-tutorial-2"
    />
  </div>
);
export default VueTut2;
