type PostResponse = {
    status: boolean,
    url: {
        Title: string,
        ActualUrl: string,
        ShortenedUrl: string
    }
};

export default PostResponse;