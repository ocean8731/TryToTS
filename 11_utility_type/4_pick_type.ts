/**
 * Pick Type
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

// 입력할 수 있는 key값만 고르기
function createPost(post: Pick<Post, 'title' | 'content'>): Post {
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '나이 30 넘어서도 해볼만한가요?',
});