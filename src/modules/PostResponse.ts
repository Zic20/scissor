type PostResponse = {
    status: boolean,
    url: {
        ActualUrl: string,
        ShortenedUrl: string
    }
};

export default PostResponse;