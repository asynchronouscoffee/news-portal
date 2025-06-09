import BlogList from '@/components/blog/BlogList';

const BlogPage = () => {
    return (
        <section className='py-12'>
            <h2 className='text-2xl font-bold mb-8'>Kabar Terbaru</h2>
            <BlogList />
        </section>
    )
}

export default BlogPage