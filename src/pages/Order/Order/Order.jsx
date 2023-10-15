
// import orderCover from '../../../assets/shop/banner3';
// import Cover from '../../Shared/Cover';

import React from 'react';
import orderCover from '../../../assets/shop/banner3.PNG';
import Cover from '../../Shared/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import CakeCard from '../../../components/CakeCard/CakeCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
  const categories = ['Chocolate', 'Vanilla', 'Fruitcake', 'Coconut', 'Strawberry' ];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu]= useMenu();
    
    const Chocolate =menu.filter(item=>item.category === 'Chocolate');
    const Vanilla =menu.filter(item=>item.category === 'Vanilla');
    const Fruitcake =menu.filter(item=>item.category === 'Fruitcake');
    const Coconut =menu.filter(item=>item.category === 'Coconut');
    const Strawberry =menu.filter(item=>item.category === 'Strawberry');
    return (
        <div>
          <Helmet>
        <title>Cake Zone|Order Cake</title>

        
      </Helmet>
            <Cover img={orderCover} title="Order Cake"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Chocolate</Tab>
    <Tab>Vanilla</Tab>
    <Tab>Fruitcake</Tab>
    <Tab>Coconut</Tab>
    <Tab>Strawberry</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={Chocolate}></OrderTab>

  </TabPanel>
  <TabPanel>
    <OrderTab items={Vanilla}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={ Fruitcake}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={Coconut}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={Strawberry}></OrderTab>

  </TabPanel>
</Tabs>

            
            
        </div>
    );
};

export default Order;