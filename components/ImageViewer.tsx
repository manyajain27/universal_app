import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    imgSource:any;
    selectedImage?:string;
}

const ImageViewer = ({imgSource,selectedImage}:Props) => {

    const imageSource = selectedImage ? {uri:selectedImage} : imgSource;

  return (
    <Image source={imageSource} style={styles.image} />
  )
}

export default ImageViewer;

const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });