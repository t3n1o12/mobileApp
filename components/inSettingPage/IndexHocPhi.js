import React, { Component } from "react";
<<<<<<< HEAD
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { HocKyRef } from "../../firebase";
import HocPhi from "./HocPhi";
=======
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { HocPhiRef ,HocPhi2Ref, HocPhi3Ref,HocPhi4Ref} from "../../firebase";
import HocPhi  from './HocPhi'
>>>>>>> 1c43cb5b6557e5e6a8e9d00408c90e2aea6b628e

export default class IndexHocPhi extends Component {
  state = {
<<<<<<< HEAD
    HocKy: [],
=======
    News1: [],
    News2: [],
    News3: [],
    News4: [],
>>>>>>> 1c43cb5b6557e5e6a8e9d00408c90e2aea6b628e
  };
  readNewsRef = () => {
    let news = [];
    HocPhiRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
<<<<<<< HEAD
        news.push({ id: doc.id, data: doc.data() });
      });
      this.setState({ HocKy: news });
    });
  };

  componentDidMount() {
    this.readHocKyRef();
=======
        news.push({ id: doc.id, data: doc.data()});
      });
      this.setState({ News1: news });
    });
  };
  
  readNews2Ref = () => {
    let news = [];
    HocPhi2Ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, data: doc.data()});
      });
      this.setState({ News2: news });
    });
  };
  
  readNews3Ref = () => {
    let news = [];
    HocPhi3Ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, data: doc.data()});
      });
      this.setState({ News3: news });
    });
  };

  readNews4Ref = () => {
    let news = [];
    HocPhi4Ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, data: doc.data()});
      });
      this.setState({ News4: news });
    });
  };

  renderNew = () => {};
  componentDidMount() {
    this.readNewsRef();
    this.readNews2Ref();
    this.readNews3Ref();
    this.readNews4Ref();
   
>>>>>>> 1c43cb5b6557e5e6a8e9d00408c90e2aea6b628e
  }

  render() {
<<<<<<< HEAD
    return (
      <>
        <HocPhi items={this.state.HocKy} /> 
        {/* {this.state.HocKy.map()} */}
=======
    console.log(this.state.News2)
    return (
      <>
          <HocPhi  items1={this.state.News1} items2={this.state.News2} items3={this.state.News3} items4={this.state.News4} />     
>>>>>>> 1c43cb5b6557e5e6a8e9d00408c90e2aea6b628e
      </>
    );
  }
}
