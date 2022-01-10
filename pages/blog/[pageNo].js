import { useRouter } from 'next/router'

export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map((dt) => {
        return{
            params:{
                pageNo: dt.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}


const pageNo = ({data}) => {


    const router = useRouter();
    const pageNumber = router.query.pageNo;


    

    return (
        <>
            <h1>{data.title}</h1>
        </>
    );
};

export default pageNo;