import React from "react"


import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBoxMargin, TbBoxPadding } from "react-icons/tb";
import { IoIosImages } from "react-icons/io";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const TipsAndTricks = () => {
  return (
    <div>
      <div className="hero d-flex align-items-center flex-column p-5">
        <h1 className="font-weight-bold bg-gray px-5 py-4 text-white text-center text-uppercase">Tips and Tricks</h1>
          <div className="hero-content d-flex px-5 mx-5">
            <p className="text-white text-center fs-4">
              Here is where we have come up with a few examples to help you improve your web page builds. With a heavy focus on boostrap classing, proper use of margin and padding, and being selective with imagery can all go a long way to creating a good looking web page.
            </p>
          </div>
      </div>
      <div className="body-content container">
      <Tabs>
        <TabList className="react-tabs__tab-list d-flex px-0">
          <Tab className="d-flex flex-column align-items-center py-3">
          <i className="icon-size-large p-2"><BsFillBootstrapFill /></i>
          <h3 className="mb-4">Boostrap</h3>
          </Tab>
          <Tab className="d-flex flex-column align-items-center py-3">
          <i className="icon-size-large p-2"><TbBoxMargin /></i>
          <h3 className="mb-4">Margin</h3>
          </Tab>
          <Tab className="d-flex flex-column align-items-center py-3">
          <i className="icon-size-large p-2"><TbBoxPadding /></i>
          <h3 className="mb-4">Padding</h3>
          </Tab>
          <Tab className="d-flex flex-column align-items-center py-3">
          <i className="icon-size-large p-2"><IoIosImages /></i>
          <h3 className="mb-4">Imagery</h3>
          </Tab>
          <Tab className="glider"></Tab>
        </TabList>
        <TabPanel>
          <h2 className="pt-3">What is Boostrap classings?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps. We use bootsrap withing the DDC platform on all things web related.</p>
          <h2>How do I use Bootstrap classes?</h2>
          <p>There are a number of different widget preferences that allow you to add bootstrap classes in order to change the appearance of an element.</p>
          <h2>What are some examples of boostrap classes?</h2>
          <p>There are plenty and plenty of bootstrap classes that are available to use at all times. Here are some of the more common ones that can help you with building a well rounded page.</p>
          <div className="d-flex">
            <div className="code-section p-4 col-4 m-2">
              <code>.text-lowercase</code><p>- indicates lowercased heading</p>
              <code>.text-uppercase</code><p>- INDICATES UPPERCASED HEADING.</p>
              <code>.text-capitalize</code><p>- Indicates Capitalized Heading</p>
            </div>
            <div className="code-section p-4 col-4 m-2">
              <code>.text-underline</code><p className="text-decoration-underline">- indicates underlined text</p>
              <code>.text-uppercase</code><p>- INDICATES UPPERCASED HEADING.</p>
              <code>.text-capitalize</code><p>- Indicates Capitalized Heading</p>
            </div>
            <div className="code-section p-4 col-4 m-2">
              <code>.text-lowercase</code><p>- indicates lowercased heading</p>
              <code>.text-uppercase</code><p>- INDICATES UPPERCASED HEADING.</p>
              <code>.text-capitalize</code><p>- Indicates Capitalized Heading</p>
            </div>
          </div>
          <h2>Examples of Preferences where you can add some classes</h2>
          <p>There are plenty and plenty of bootstrap classes that are available to use at all times. Here are some of the more common ones that can help you with building a well rounded page.</p>
        </TabPanel>
        <TabPanel>
          <h2 className="pt-3">What is Margin?</h2>
          <p>The CSS margin properties are used to create space around elements, outside of any defined borders. With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).</p>
          <h2>How do I use Margin Bootstrap classes?</h2>
          <p>There are a number of different widget preferences that allow you to add bootstrap classes in order to change the appearance of an element.</p>
          <h2>What are some examples of boostrap classes?</h2>
          <p>The classes are named using the format The properties are:</p>
          <div className="code-section p-4">
            <code>
              <ul>
                <li>m - for classes that set margin</li>
                <li>t - for classes that set margin-top</li>
                <li>b - for classes that set margin-bottom</li>
                <li>l - for classes that set margin-left</li>
                <li>r - for classes that set margin-right</li>
                <li>x - for classes that set both *-left and *-right</li>
                <li>y - for classes that set both *-top and *-bottom</li>
                <li>blank - for classes that set a margin or padding on all 4 sides of the element(ei m-6)</li>
              </ul>
            </code>
          </div>
          <h2>Examples of Preferences where you can add some classes</h2>
          <p>There are plenty and plenty of bootstrap classes that are available to use at all times. Here are some of the more common ones that can help you with building a well rounded page.</p>
        </TabPanel>
        <TabPanel>
          <h2 className="pt-3">What is Padding?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
          <h2>How do I use Padding Bootstrap classes?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
          <h2>What are some examples of boostrap classes?</h2>
          <div className="code-section p-4">
            <code>
              <ul>
                <li>m - for classes that set margin</li>
                <li>t - for classes that set margin-top</li>
                <li>b - for classes that set margin-bottom</li>
                <li>l - for classes that set margin-left</li>
                <li>r - for classes that set margin-right</li>
                <li>x - for classes that set both *-left and *-right</li>
                <li>y - for classes that set both *-top and *-bottom</li>
                <li>blank - for classes that set a margin or padding on all 4 sides of the element(ei m-6)</li>
              </ul>
            </code>
          </div>
          <h2>Examples of Preferences where you can add some classes</h2>
          <p>There are plenty and plenty of bootstrap classes that are available to use at all times. Here are some of the more common ones that can help you with building a well rounded page.</p>
        </TabPanel>
        <TabPanel>
          <h2 className="pt-3">Proper Use of Imagery</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
          <h2>What are some examples of boostrap classes?</h2>
          <h2>How do I use Bootstrap classes?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
          <h2>Examples of Preferences where you can add some classes</h2>
          <p>There are plenty and plenty of bootstrap classes that are available to use at all times. Here are some of the more common ones that can help you with building a well rounded page.</p>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  )
}


export default TipsAndTricks
