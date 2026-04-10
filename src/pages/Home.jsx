import BlogCard from '../components/BlogCard'
import { useBlog } from '../context/BlogContext'
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { blog } = useBlog();
  const { theme } = useTheme();
  const publishedBlog = blog.filter(b => b.isPublished);


  return (
    <div className={`w-full flex justify-center min-h-[calc(100vh-4rem)] ${theme ? 'bg-zinc-950 text-white' : ' bg-zinc-200 text-black'}`}>
      <div className='w-5xl h-full py-12 px-4'>

        {/* Top */}
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-extrabold md:text-5xl'>Welcome to <span className='text-blue-600'>dk-blog</span></h1>
          <p className='max-w-70 md:max-w-xl mt-5 text-xs md:text-base text-center text-zinc-600'>Discover thoughtful articles on technology, programming, and software engineering from passionate writers.</p>
        </div>

        {/* Bottom */}
        <div className='w-full mt-10'>
          {/* Artical Count */}
          <div className='flex justify-between'>
            <h1 className='font-bold text-lg md:text-2xl'>Latest Articles</h1>
            <h1 className='text-zinc-600'><span>{publishedBlog.length}</span> articles</h1>
          </div>
          {/* Cards */}
          <div className='w-full mt-5'>
            {publishedBlog.length === 0 ? (
              <div className='flex flex-col items-center justify-center py-20 text-center'>
                <h2 className='text-xl md:text-2xl font-semibold'>
                  No blogs yet
                </h2>
                <p className='text-zinc-600 mt-2'>
                  Creating your blog
                </p>
              </div>
            ) : (
              <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {publishedBlog.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
