import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import {ref as databaseRef, push, set, get, remove } from 'firebase/database';
import { db, storage } from './libs/firebase/firebaseConfig';

// document.querySelector("#shoeImage").addEventListener('change', onImageSelected);
// document.forms['write-product'].addEventListener('submit', onAddProduct);

// function onAddProduct(){
//     e.preventDefault();
//     uploadNewProduct();
// }

// function onImageSelected(e){
//     let file = e.target.files[0];

//     document.querySelector('.add-image-form img').src = URL.createObjectURL(file);

// }

// async function uploadNewProduct(){
//     const shoePrice = document.querySelector("#shoe_price").value.trim();
//     const shoeSize = document.querySelector("#shoe_size").value.trim();
//     const shoeName = document.querySelector("#shoe_name").value.trim();
//     const file = document.querySelector('#shoeImage').files[0];

//     const imageRef = storageRef(storage, `images/${file.name}`);
//     const dataRef = databaseRef(db, 'products');

//     const uploadResult = await uploadBytes(imageRef, file);
//     const urlPath = await getDownloadURL(imageRef);

//     const storagePath = uploadResult.metadata.fullPath;

//     const itemRef = await push(dataRef);

//     set(itemRef,{
//         key:itemRef.key,
//         sku:`sksfs${itemRef.key}`,
//         urlPath,
//         storagePath,
//         shoeName,
//         shoeSize,
//         shoePrice
//     })
// }