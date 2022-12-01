import {loadData} from '../api/post.js'
import { useState } from 'react';
import { client } from '../../lib/client'



const Post = ({ post }) => {
    console.log(post)
    return(
        <div>{post.title}</div>
    )
}

export async function getStaticPaths(){
     const query  = `*[_type == "post" ]{
         slug {
            current
        }
     }`

     const posts = await client.fetch(query)
     const paths = posts.map((post) => ({
         para