import React from 'react';

export default function Shuffle(arr) => {
    let randomIndex;
    let temp;
    for (let i=0; i<arr.length; i++) {
        temp = arr[i];
        randomIndex = Math.floor(Math.random() * (i+1));
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    console.log(arr);
    return arr;
}