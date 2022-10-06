const fs=require('fs');

//reading files

fs.readFile('./docs/blogs.txt', (err,data) =>
{
    if(err){
        console.log(err);
    }
    console.log(data);
});
console.log('last line');

//writing files

fs.writeFile('./docs/blog.txt','hello, world', () =>{
    console.log('the file is written');
});

fs.writeFile('.docs/blogs.txt', 'hello, ninja', () =>{
    console.log('the file is saved');
});

//making directories

fs.mkdir('./assets' , (err) => {
    if (err){
        console.log(err);
    }
    console.log('folder created');
}); 
