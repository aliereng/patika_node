const posts = [
    {id:1, title:"post_1", desc:"post_1 desc", author:"post_1 author"},
    {id:2, title:"post_2", desc:"post_2 desc", author:"post_2 author"},
    {id:3, title:"post_3", desc:"post_3 desc", author:"post_3 author"}
];

function listPosts(){
    posts.map(post=> {
        console.log(`id: ${post.id} - title: ${post.title} - description: ${post.desc} - author: ${post.author}`)
    });
};


async function addnewPost(newPost){
   
    await posts.push(newPost);
  
}

listPosts();
addnewPost({id:4, title:"post_4", desc:"post_4 desc", author:"post_4 author"}).then(()=>{
    listPosts();
}).catch(err=> {
    console.log(err)
})
