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
        <TabList className="react-tabs__tab-list d-flex">
          <Tab className="d-flex flex-column align-items-center py-3">
          <i className="icon-size-large p-2"><BsFillBootstrapFill /></i>
          <h3 className="mb-4">Boostrap</h3>
          </Tab>
          <Tab className="d-flex flex-column align-items-center py-3">
          <i className="icon-size-large p-1"><TbBoxMargin /></i>
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
          <h2 className="pt-3">What is Boostrap?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps. We use bootsrap withing the DDC platform on all things web related.</p>
          <h2>What are some examples of boostrap classes?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
          <code>Hello World</code>
          <h2>How do I use Bootstrap classes?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
        </TabPanel>
        <TabPanel>
          <h2 className="pt-3">What is Margin?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
          <h2>What are some examples of boostrap classes?</h2>
          <h2>How do I use Bootstrap classes?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
        </TabPanel>
        <TabPanel>
          <h2 className="pt-3">What is Padding?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
          <h2>What are some examples of boostrap classes?</h2>
          <h2>How do I use Bootstrap classes?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
        </TabPanel>
        <TabPanel>
          <h2 className="pt-3">Proper Use of Imagery</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
          <h2>What are some examples of boostrap classes?</h2>
          <h2>How do I use Bootstrap classes?</h2>
          <p>Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.</p>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  )
}


export default TipsAndTricks
