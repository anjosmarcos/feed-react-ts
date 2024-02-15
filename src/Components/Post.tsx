import style from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FormEvent,ChangeEvent,  useState, InvalidEvent } from 'react';

interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    text: string;

}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({post}: PostProps) {
    const [newCommentText, setNewCommentTest] = useState('')
    
    const [comments, setComments] = useState([
        'Post muito bom!',
    ])

    const publishedAtForFormatted = format(post.publishedAt, "dd 'de' LLLL 'ás ' HH:mm", {
        locale: ptBR
    
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        
        setComments([...comments, newCommentText])
        setNewCommentTest('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentTest(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        // imuutabilidade - não altera o estado atual
        
        // filter retorna um novo array
        const commentsWithoutDeleted = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        // filter retorna um novo array
        setComments(commentsWithoutDeleted)
    }

    function haldleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Por favor, preencha o campo de comentário')
    }

    const isNewCommentEmpty = newCommentText.length === 0
    
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true} src={post.author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedAtForFormatted} dateTime={post.publishedAt.toString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
               {post.content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.text}>{line.text}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.text}>
                        <a href="#">{line.text}</a>;
                    </p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="O que você achou do projeto?"
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={haldleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type='submit' 
                        disabled={isNewCommentEmpty}
                    >  
                        Comentar
                    
                    </button>
                </footer>
            </form>

            <div className={style.commentList}>
               {comments.map(comment => (
                   <Comment 
                        key={comment}  
                        content={comment}
                        onDeleteComment={deleteComment} 
                    />
               ))}

            </div>
        </article>
    )
}