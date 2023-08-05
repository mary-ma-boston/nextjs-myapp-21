import {useRouter} from 'next/router';

//our-domain.com/news/somthing-important

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    //send a request to the backend API
    //to fetch the news item with newsId

    return (
      <>
        <h1>Detail Page</h1>
        <p>{newsId}</p>
      </> 
    )
  }
  
  export default DetailPage;